"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = void 0;
class AppConfig {
    static getNodeVersion() {
        return process.version;
    }
    static getNodeArchitecture() {
        return process.arch;
    }
    static getNodePlatform() {
        return process.platform;
    }
    static getTrackingId() {
        return 'platform:' + this.getNodeVersion().substring(0, this.getNodeVersion().indexOf('.')) + '|' + this.getNodeVersion() + ',type:SDK' + this.SDK_VERSION + ',so;';
    }
    static getUserAgent() {
        return 'MercadoPago Node.js SDK v' + this.SDK_VERSION + ' (node ' + this.getNodeVersion() + '-' + this.getNodeArchitecture() + '-' + this.getNodePlatform() + ')';
    }
}
exports.AppConfig = AppConfig;
AppConfig.DEFAULT_TIMEOUT = 10000;
AppConfig.DEFAULT_RETRIES = 2;
AppConfig.BASE_DELAY_MS = 1000;
AppConfig.BASE_URL = 'https://api.mercadopago.com';
AppConfig.PRODUCT_ID = 'bc32b6ntrpp001u8nhkg';
AppConfig.SDK_VERSION = '2.0.15';
AppConfig.Headers = {
    AUTHORIZATION: 'Authorization',
    CONTENT_TYPE: 'Content-Type',
    USER_AGENT: 'User-Agent',
    IDEMPOTENCY_KEY: 'X-Idempotency-Key',
    PRODUCT_ID: 'X-Product-Id',
    TRACKING_ID: 'X-Tracking-Id',
    CORPORATION_ID: 'X-Corporation-Id',
    INTEGRATOR_ID: 'X-Integrator-Id',
    PLATFORM_ID: 'X-Platform-Id'
};
