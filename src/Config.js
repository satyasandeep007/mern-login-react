const dev = {
    hostName: "http://localhost:8000",
    cookie_expiration: 364
};

// eslint-disable-next-line 
const prod = {
    hostName: "http://localhost:8000",
    cookie_expiration: 364
};

// const config = process.env.REACT_APP_STAGE === 'production'
//     ? prod
//     : dev;

const Config = prod;

export default {
    ...Config
};
