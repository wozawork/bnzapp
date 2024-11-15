import { WINDOW_CDAPI_NOT_EXIST, ABC_NUMBER_CHARACTARS } from './constans';
import HeartBeatSample from '../utils/HeartBeatSample';

export const setCustomerSessionId = (userCSID) => {
  try {
    if (window && window.cdApi) {
      window.cdApi.setCustomerSessionId(userCSID);
    } else {
      console.log(WINDOW_CDAPI_NOT_EXIST);
    }
  } catch (e) {
    console.error(e);
  }
};

export const changeContext = (pageName) => {
  try {
    if (window && window.cdApi) {
      window.cdApi.changeContext(pageName);
    } else {
      console.log(WINDOW_CDAPI_NOT_EXIST, ' ', pageName);
    }
  } catch (e) {
    console.error(e);
  }
};

export const setCustomerBrand = (brand) => {
  try {
    if (window && window.cdApi) {
      window.cdApi.setCustomerBrand(brand);
    } else {
      console.log(WINDOW_CDAPI_NOT_EXIST);
    }
  } catch (e) {
    console.error(e);
  }
};

export const performFlush = () => {
  try {
    if (window && window.cdApi.client) {
      window.cdApi.client.flush();
    } else {
      console.log(WINDOW_CDAPI_NOT_EXIST);
    }
  } catch (e) {
    console.error(e);
  }
};

export const resumeCollection = () => {
  try {
    if (window && window.cdApi) {
      window.cdApi.resumeCollection();
    } else {
      console.log(WINDOW_CDAPI_NOT_EXIST);
    }
  } catch (e) {
    console.error(e);
  }
};

export const pauseCollection = () => {
  try {
    if (window && window.cdApi) {
      window.cdApi.pauseCollection();
    } else {
      console.log(WINDOW_CDAPI_NOT_EXIST);
    }
  } catch (e) {
    console.error(e);
  }
};

export const startHeartBeat = () => {
  try {
    const heartBeat = new HeartBeatSample();
    heartBeat.startListen();
  } catch (e) {
    console.error(e);
  }
};

export const dummyData = (
  customerId,
  actionName,
  CSID,
  activityType,
  uuid,
  brand,
  solution
) => {
  return {
    customerId: customerId ? customerId : 'dummy',
    action: actionName,
    customerSessionId: CSID,
    activityType: activityType ? activityType : 'LOGIN',
    uuid: uuid,
    brand: brand,
    solution: solution,
  };
};

export function postApi(actionName) {
  console.log('API call: ', actionName);
  // fetch(POST_URL, {
  //     method: "POST",
  //     body: JSON.stringify(dummyData(actionName)),
  // })
  //     .then(res => res.json())
  //     .then(json => console.log(json))
  //     .catch(err => console.log(err))
}

export function firstInitial(CSID, customerBrand, context) {
  try {
    if (window && window.cdApi) {
      window.cdApi.setCustomerSessionId(CSID);
      window.cdApi.setCustomerBrand(customerBrand);
      window.cdApi.changeContext(context);
    }
  } catch (e) {
    console.error(e);
  }
}

// FOR DUMMY DEMO ONLY - in real life the CSID value is managed server-side:
export function getTheCSID() {
  const dateNowSec = Date.now().toString();
  const CSID = 'TEST' + dateNowSec;
  return CSID;

  // try {
  //   const CSID = window.sessionStorage.getItem('CSID');
  //   if (!CSID) {
  //     const dateNowSec = Date.now().toString();
  //     const CSID = 'TEST' + dateNowSec;
  //     sessionStorage.setItem('CSID', CSID);
  //     console.log('a CSID sessionStorage key created: ' + CSID);
  //     return CSID;
  //   } else {
  //     console.log('a CSID sessionStorage key: ' + CSID);
  //     return CSID; // do nothing, just get the CSID from the sessionStorage.
  //   }
  // } catch (e) {
  //   console.error('Oops: ' + e);
  // }
}

export function alternativeLoad(url, csid, context, brand) {
  const jsLoaded = window.sessionStorage.getItem('isLoaded');
  let theJs = document.createElement('script');
  theJs.type = 'text/javascript';

  function jsSdkCheckState() {
    function onNotification(e) {
      const msg = e.data;
      if (
        msg.type === 'cdStateChangedEvent' &&
        (msg.event['state'] === 'starting' || msg.event['state'] === 'started')
      ) {
        try {
          window.cdApi.setCustomerSessionId(csid);
          window.cdApi.changeContext(context);
        } catch (e) {
          console.error(e);
        }
        window.removeEventListener('message', onNotification, true);
      }
    }
    window && window.addEventListener
      ? window.addEventListener('message', onNotification, true)
      : window.attachEvent('onmessage', onNotification);
  }

  if (window.self === window.top) {
    window.onbeforeunload = function () {
      sessionStorage.removeItem('isLoaded');
    };
  }
  if (jsLoaded !== 'true') {
    jsSdkCheckState();
    theJs.src = url;
    document.getElementsByTagName('head')[0].appendChild(theJs);
    sessionStorage.setItem('isLoaded', 'true');
  } else {
    if (window.self === window.top && window.cdApi) {
      try {
        window.cdApi.setCustomerSessionId(csid);
        window.cdApi.changeContext(context);
        if (brand) {
          window.cdApi.setCustomerBrand(brand);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }
}

export function generateString(length) {
  let result = 'T';
  const charactersLength = ABC_NUMBER_CHARACTARS.length;
  for (let i = 0; i < length; i++) {
    result += ABC_NUMBER_CHARACTARS.charAt(
      Math.floor(Math.random() * charactersLength)
    );
  }

  return result;
}
