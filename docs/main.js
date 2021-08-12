(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rupes\Desktop\New folder\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "5ak/":
/*!**************************************!*\
  !*** ./src/app/swap/swap.service.ts ***!
  \**************************************/
/*! exports provided: SwapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapService", function() { return SwapService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class SwapService {
    constructor(http) {
        this.http = http;
        this.bscBalance = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiurl + 'balanceOfBSC?userAddress=';
        this.bscToeth = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiurl + 'getAmountAfterFeeForBSC?amount=';
        this.ethBalance = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiurl + 'balanceOf?userAddress=';
        this.ethtobsc = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiurl + 'getAmountAfterFeeForETH?amount=';
        this.swapBsc = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiurl + 'getTransactionResponse?txHash=';
        this.swapeth = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiurl + 'getTransactionResponseETH?txHash=';
        this.ETHbridgeFee = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiurl + 'getETHBridgeFees';
        this.BSCbridgeFee = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiurl + 'getBSCBridgeFees';
    }
    getBSCBalanace(bscWalletAddress) {
        return this.http.get(this.bscBalance + bscWalletAddress);
    }
    bscToEthConvert(data) {
        return this.http.get(this.bscToeth + data);
    }
    getETHBalanace(ethWalletAddress) {
        return this.http.get(this.ethBalance + ethWalletAddress);
    }
    ethToBscConvert(data) {
        return this.http.get(this.ethtobsc + data);
    }
    bscSwap(data) {
        return this.http.get(this.swapBsc + data);
    }
    ethSwap(data) {
        return this.http.get(this.swapeth + data);
    }
    getETHbridgeFee() {
        return this.http.get(this.ETHbridgeFee);
    }
    getBSCbridgeFee() {
        return this.http.get(this.BSCbridgeFee);
    }
}
SwapService.ɵfac = function SwapService_Factory(t) { return new (t || SwapService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SwapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SwapService, factory: SwapService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    apiurl: 'https://swapapi.catoshi.cat/api/catoshi/',
    getAllTransaction: 'https://api-ropsten.etherscan.io/'
    // apiurl : 'http://199.192.31.214:4000/api/catoshi/',   
    // apiurl : 'http://localhost:4000/api/catoshi/'
};


/***/ }),

/***/ "NrID":
/*!*****************************************************!*\
  !*** ./src/app/directives/digits-only.directive.ts ***!
  \*****************************************************/
/*! exports provided: DigitsOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitsOnlyDirective", function() { return DigitsOnlyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DigitsOnlyDirective {
    constructor(_el) {
        this._el = _el;
        this.navigationKeys = [
            'Backspace',
            'Delete',
            'Tab',
            'Escape',
            'Enter',
            'Home',
            'End',
            'ArrowLeft',
            'ArrowRight',
            'Clear',
            'Copy',
            'Paste'
        ];
        this.inputElement = _el.nativeElement;
    }
    onKeyDown(e) {
        if (this.navigationKeys.indexOf(e.key) > -1 || // Allow: navigation keys: backspace, delete, arrows etc.
            (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
            (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
            (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
            (e.key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
            (e.key === 'a' && e.metaKey === true) || // Allow: Cmd+A (Mac)
            (e.key === 'c' && e.metaKey === true) || // Allow: Cmd+C (Mac)
            (e.key === 'v' && e.metaKey === true) || // Allow: Cmd+V (Mac)
            (e.key === 'x' && e.metaKey === true) // Allow: Cmd+X (Mac)
        ) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
            (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    }
    onPaste(event = ClipboardEvent) {
        event.preventDefault();
        const pastedInput = event.clipboardData
            .getData('text/plain')
            .replace(/\D/g, ''); // get a digit-only string
        document.execCommand('insertText', false, pastedInput);
    }
    onDrop(event = DragEvent) {
        event.preventDefault();
        const textData = event.dataTransfer.getData('text').replace(/\D/g, '');
        this.inputElement.focus();
        document.execCommand('insertText', false, textData);
    }
}
DigitsOnlyDirective.ɵfac = function DigitsOnlyDirective_Factory(t) { return new (t || DigitsOnlyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DigitsOnlyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DigitsOnlyDirective, selectors: [["", "appOnlynumber", ""]], hostBindings: function DigitsOnlyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function DigitsOnlyDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("paste", function DigitsOnlyDirective_paste_HostBindingHandler($event) { return ctx.onPaste($event); })("drop", function DigitsOnlyDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
    } } });


/***/ }),

/***/ "P/EV":
/*!**********************************************!*\
  !*** ./src/app/swapv1v2/swapv1v2.service.ts ***!
  \**********************************************/
/*! exports provided: SwapV1V2Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapV1V2Service", function() { return SwapV1V2Service; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class SwapV1V2Service {
    constructor(http) {
        this.http = http;
        this.bscBalance = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiurl + 'balanceOfBSC?userAddress=';
        this.bscToeth = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiurl + 'getAmountAfterFeeForBSC?amount=';
        this.ethBalance = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiurl + 'balanceOf?userAddress=';
        this.ethtobsc = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiurl + 'getAmountAfterFeeForETH?amount=';
        this.swapBsc = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiurl + 'getTransactionResponse?txHash=';
        this.swapeth = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiurl + 'getTransactionResponseETH?txHash=';
        this.ETHbridgeFee = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiurl + 'getETHBridgeFees';
        this.BSCbridgeFee = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiurl + 'getBSCBridgeFees';
    }
    getBSCBalanace(bscWalletAddress) {
        return this.http.get(this.bscBalance + bscWalletAddress);
    }
    bscToEthConvert(data) {
        return this.http.get(this.bscToeth + data);
    }
    getETHBalanace(ethWalletAddress) {
        return this.http.get(this.ethBalance + ethWalletAddress);
    }
    ethToBscConvert(data) {
        return this.http.get(this.ethtobsc + data);
    }
    bscSwap(data) {
        return this.http.get(this.swapBsc + data);
    }
    ethSwap(data) {
        return this.http.get(this.swapeth + data);
    }
    getETHbridgeFee() {
        return this.http.get(this.ETHbridgeFee);
    }
    getBSCbridgeFee() {
        return this.http.get(this.BSCbridgeFee);
    }
    getTransactionByAddress(address) {
        let apikey = 'P67JC5SI1VAH8SUZ7T3R99PIQ1SNMTUDTM';
        //address = '0x2b570B9A90789022F007fCEa5f8Cb4227379D527'
        //return this.http.get('https://api-ropsten.etherscan.io/api?module=account&action=txlist&address='+ address +'&startblock=0&endblock=99999999&sort=desc&apikey=' + apikey);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].getAllTransaction + 'api?module=account&action=txlist&address=' + address + '&startblock=0&endblock=99999999&sort=desc&apikey=' + apikey);
    }
    getv1v2Balance(userAdd, contAdd) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiurl + 'getBalance?userAddress=' + userAdd + '&contractAddress=' + contAdd);
    }
}
SwapV1V2Service.ɵfac = function SwapV1V2Service_Factory(t) { return new (t || SwapV1V2Service)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SwapV1V2Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SwapV1V2Service, factory: SwapV1V2Service.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'catsohi';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "T9tP":
/*!**********************************************!*\
  !*** ./src/app/services/metamask.service.ts ***!
  \**********************************************/
/*! exports provided: MetamaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetamaskService", function() { return MetamaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ "meUc");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @metamask/detect-provider */ "TEHo");
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "Vx+w");
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @walletconnect/web3-provider */ "Lq9n");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _walletconnect_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @walletconnect/client */ "4Hp+");
/* harmony import */ var _walletconnect_qrcode_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @walletconnect/qrcode-modal */ "dFyl");
/* harmony import */ var _walletconnect_qrcode_modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_qrcode_modal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "5eHb");










class MetamaskService {
    constructor(toster) {
        this.toster = toster;
        this.metaMaskStatus = 'Get MetaMask';
        this.txnByDetails = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.connectWalletHandler = () => {
            // Create a connector
            window.connector = new _walletconnect_client__WEBPACK_IMPORTED_MODULE_6__["default"]({
                bridge: "https://bridge.walletconnect.org",
                qrcodeModal: _walletconnect_qrcode_modal__WEBPACK_IMPORTED_MODULE_7___default.a,
                qrcodeModalOptions: {
                    mobileLinks: [
                        "metamask",
                        "trust",
                    ],
                },
            });
            // setConnector(connector);
            // Check if connection is already established
            if (!window.connector.connected) {
                // create new session
                window.connector.createSession();
            }
            // Subscribe to connection events
            window.connector.on("connect", (error, payload) => {
                if (error) {
                    throw error;
                }
                // Get provided accounts and chainId
                const { accounts, chainId } = payload.params[0];
                sessionStorage.setItem('account', accounts[0]);
                sessionStorage.setItem('chainId', chainId);
                sessionStorage.setItem('account_ETH_trustWallet', accounts[0]);
                // this.connectStatus = true;
                location.reload();
            });
            window.connector.on("session_update", (error, payload) => {
                if (error) {
                    throw error;
                }
                // Get updated accounts and chainId
                const { accounts, chainId } = payload.params[0];
                console.log('session_update:', accounts);
            });
            window.connector.on("disconnect", (error, payload) => {
                if (error) {
                    throw error;
                }
                // Delete connector
                console.log('onDesconnect:', payload);
                sessionStorage.removeItem('account');
                sessionStorage.removeItem('chainId');
                sessionStorage.removeItem('account_ETH_trustWallet');
                location.reload();
            });
        };
        this.txnByAddress = this.txnByDetails.asObservable();
    }
    onNetwirkChangeREload() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ethereum = yield _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2___default()();
            ethereum;
            if (ethereum) {
                ethereum.on('chainChanged', (chainId) => {
                    window.location.reload();
                });
            }
        });
    }
    checkMetaMaskInitial() {
        if (window.ethereum === undefined) {
            this.metaMaskStatus = 'Get MetaMask';
        }
        else {
            this.metaMaskStatus = 'Connect Wallet';
        }
    }
    metaMaskUpdate() {
        this.metaMaskStatus = 'Connect Wallet';
    }
    metaMaskUpdated() {
        this.metaMaskStatus = 'Wallet Connected';
    }
    //Connect to Metamask Wallet (FOR WEB)
    initMetaMask() {
        if (this.metaMaskStatus !== 'Wallet Connected') {
            if (window.ethereum === undefined) {
                this.toster.error('Non-Ethereum browser detected. Install MetaMask', '', { closeButton: true, progressBar: true });
                this.metaMaskStatus = 'Get MetaMask';
            }
            else {
                if (typeof window.web3 !== 'undefined') {
                    this.web3 = new web3__WEBPACK_IMPORTED_MODULE_1___default.a(window.web3.currentProvider);
                }
                else {
                    this.web3 = new web3__WEBPACK_IMPORTED_MODULE_1___default.a.providers.HttpProvider(_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].web3ProviderUrl);
                }
                window.web3 = new web3__WEBPACK_IMPORTED_MODULE_1___default.a(window.ethereum);
                this.enable = this.enableMetaMaskAccount();
                setInterval(function () {
                    var _a, _b, _c, _d;
                    if (window.ethereum._state == "undefined" || ((_a = window.ethereum._state) === null || _a === void 0 ? void 0 : _a.accounts[0]) === undefined) {
                        // this.metaMaskStatus = 'Connect to a wallet';
                        sessionStorage.removeItem('networkStatus');
                    }
                    else {
                        if (sessionStorage.getItem('swapPage') == "swap") {
                            if (((_b = window.ethereum) === null || _b === void 0 ? void 0 : _b.networkVersion) == "97" || ((_c = window.ethereum) === null || _c === void 0 ? void 0 : _c.networkVersion) == 0xfa2) {
                                localStorage.setItem('networkStatus', "right");
                            }
                            else {
                                localStorage.setItem('networkStatus', "wrong");
                            }
                        }
                        else if (sessionStorage.getItem('swapPage') == "swapv1v2") {
                            if (((_d = window.ethereum) === null || _d === void 0 ? void 0 : _d.networkVersion) == "1") {
                                localStorage.setItem('networkStatus', "right");
                            }
                            else {
                                localStorage.setItem('networkStatus', "wrong");
                            }
                        }
                        // location.reload();
                    }
                }, 1000);
                if (window.ethereum) {
                    // Subscriptions register
                    window.ethereum.on('accountsChanged', (accounts) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        localStorage.removeItem('networkStatus');
                        sessionStorage.removeItem('account_ropsten');
                        this.txnByDetails.next(new Date());
                        location.reload();
                    }));
                    window.ethereum.on('networkChanged', (network) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        var _a, _b, _c;
                        if (sessionStorage.getItem('swapPage') == "swap") {
                            if (((_a = window.ethereum) === null || _a === void 0 ? void 0 : _a.networkVersion) == "97" || ((_b = window.ethereum) === null || _b === void 0 ? void 0 : _b.networkVersion) == "250") {
                                localStorage.setItem('networkStatus', "right");
                            }
                            else {
                                localStorage.setItem('networkStatus', "wrong");
                            }
                        }
                        else if (sessionStorage.getItem('swapPage') == "swapv1v2") {
                            if (((_c = window.ethereum) === null || _c === void 0 ? void 0 : _c.networkVersion) == "1") {
                                localStorage.setItem('networkStatus', "right");
                            }
                            else {
                                localStorage.setItem('networkStatus', "wrong");
                            }
                        }
                        location.reload();
                    }));
                }
            }
        }
        else {
            if (sessionStorage.getItem('swapPage') == "swap") {
                if (window.ethereum.networkVersion == "97") {
                    this.toster.success("BSC Testnet Connected");
                }
                else if (window.ethereum.networkVersion == "250") {
                    this.toster.success("Ropsten Test Network Connected");
                }
                else {
                    sessionStorage.clear();
                    this.toster.info("Please connect to the appropriate ETH or BSC Network");
                }
            }
            else if (sessionStorage.getItem('swapPage') == "swapv1v2") {
                if (window.ethereum.networkVersion == "1") {
                    this.toster.success(" Ethereum Mainnet Connected");
                }
                else {
                    // sessionStorage.clear()
                    this.toster.info("Please connect to the Ethereum Mainnet");
                }
            }
        }
    }
    enableMetaMaskAccount() {
        let enable = false;
        enable = window.ethereum.enable();
    }
    //Connect to Metamask Wallet (FOR MOBILE)
    walletProvider() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.headerService.connectWalletFromDashboard.next(null);
            const provider = new _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4__["default"]({
                infuraId: _config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].infuraId,
                qrcodeModalOptions: {
                // mobileLinks: [
                //   "metamask",
                //   "trust",
                // ],
                },
            });
            yield provider.enable();
            this.web3 = new web3__WEBPACK_IMPORTED_MODULE_1___default.a(provider);
            const accounts = yield this.web3.eth.getAccounts();
            if (accounts[0]) {
                // this.metaMaskConnected = true;
                // this.accountAddress = accounts[0];
                sessionStorage.setItem('account', accounts[0]);
                sessionStorage.setItem('chainId', provider.chainId);
                sessionStorage.setItem('account_ETH_trustWallet', accounts[0]);
                // this.connectStatus = true;
                if (!localStorage.getItem('walletConnected')) {
                    localStorage.setItem('walletConnected', 'success');
                    location.reload();
                }
            }
            ;
            provider.on("disconnect", (code, reason) => {
                // console.log(code, reason);
                sessionStorage.removeItem('account');
                sessionStorage.removeItem('chainId');
                sessionStorage.removeItem('account_ETH_trustWallet');
                if (code == 1000) {
                    // this.headerService.web3Instance.next(false);
                    // this.metaMaskConnected = false;
                    sessionStorage.removeItem('account');
                    localStorage.removeItem('walletConnected');
                    location.reload();
                    // this.connectStatus = false;
                }
            });
            // this.headerService.web3Instance.next(true);
            provider.on('accountsChanged', (accounts) => {
                // this.accountAddress = accounts[0];
                sessionStorage.setItem('account', accounts[0]);
                localStorage.setItem('walletConnected', 'success');
                // this.connectStatus = true;
                location.reload();
            });
            provider.on('networkChanged', (network) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                location.reload();
                // this.connectStatus = true;
            }));
            provider.on('onConnect', (network) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                location.reload();
                // this.connectStatus = true;
            }));
        });
    }
    disconnectAllWallet(param = null, secParam = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let provider = new _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4__["default"]({
                infuraId: 'c7bdbb105c584291960e2ff0ec4b8e0c',
                qrcodeModalOptions: {
                // mobileLinks: [
                //   "metamask",
                //   "trust",
                // ],
                }
            });
            sessionStorage.clear();
            localStorage.removeItem('walletConnected');
            yield provider.disconnect();
        });
    }
}
MetamaskService.ɵfac = function MetamaskService_Factory(t) { return new (t || MetamaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"])); };
MetamaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: MetamaskService, factory: MetamaskService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Vx+w":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: appConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appConfig", function() { return appConfig; });
const appConfig = {
    //For Metamask Wallet 
    // web3ProviderUrl : 'https://data-seed-prebsc-1-s1.binance.org:8545',
    web3ProviderUrl: 'http://localhost:4200',
    infuraId: 'c7bdbb105c584291960e2ff0ec4b8e0c',
    contractAddressBSC: '0x629a527977Ad9ef7AF990881975335eAaE4b474B',
    tokenAbiBSC: [{ "inputs": [{ "internalType": "string", "name": "cats_name", "type": "string" }, { "internalType": "string", "name": "cats_symbol", "type": "string" }, { "internalType": "address", "name": "_system", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "nonce", "type": "uint256" }], "name": "SwapRequest", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "feeCalculation", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getSwapFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "nonce", "type": "uint256" }], "name": "getSwapStatus", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "mintFee", "type": "uint256" }], "name": "setSwapFee", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_system", "type": "address" }], "name": "setSystem", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "swap", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }], "name": "swapBack", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }],
    contractAddressETH: '0x110B4788224721eFe97389CbD88a47C436992Ec2',
    tokenAbiETH: [{ "inputs": [{ "internalType": "string", "name": "cats_name", "type": "string" }, { "internalType": "string", "name": "cats_symbol", "type": "string" }, { "internalType": "address", "name": "_system", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "nonce", "type": "uint256" }], "name": "SwapRequest", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "_bridgeAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_getCurrentSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_getRate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tAmount", "type": "uint256" }], "name": "burnOf", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "excludeAccount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "feeCalculation", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "name": "getMinute", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "getSwapFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "nonce", "type": "uint256" }], "name": "getSwapStatus", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getUniswapV2Router", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "includeAccount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "isExcluded", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tAmount", "type": "uint256" }], "name": "reflect", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tAmount", "type": "uint256" }, { "internalType": "bool", "name": "deductTransferFee", "type": "bool" }], "name": "reflectionFromToken", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "add", "type": "address" }], "name": "setBridgeAddress", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "bridgeFee", "type": "uint256" }], "name": "setSwapFee", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_system", "type": "address" }], "name": "setSystem", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_uniswapV2Router", "type": "address" }], "name": "setUniswapV2Router", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "swap", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }], "name": "swapBack", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "rAmount", "type": "uint256" }], "name": "tokenFromReflection", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalFees", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }],
    // Swap v1v2 for 
    contraceAddressV1: '0x6a00b86e30167F73e38bE086081b80213E8266Aa',
    tokenAddressV1: [{ "inputs": [{ "internalType": "string", "name": "cats_name", "type": "string" }, { "internalType": "string", "name": "cats_symbol", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tAmount", "type": "uint256" }], "name": "burnOf", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "excludeAccount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "name": "getMinute", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "includeAccount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "isExcluded", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tAmount", "type": "uint256" }], "name": "reflect", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tAmount", "type": "uint256" }, { "internalType": "bool", "name": "deductTransferFee", "type": "bool" }], "name": "reflectionFromToken", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "rAmount", "type": "uint256" }], "name": "tokenFromReflection", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalFees", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }],
    contractAddressV1V2Approve: '0x64674D26df0Fd7cF8e9d5c8D721Bc202C6B98822',
    tokenV1V2: [{ "inputs": [{ "internalType": "address", "name": "_tokenv1", "type": "address" }, { "internalType": "address", "name": "_tokenv2", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "inputs": [{ "internalType": "bool", "name": "_allowSwapping", "type": "bool" }], "name": "changeSwappingState", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getSwappingStatus", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "migratetoken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
};


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _swap_swap_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./swap/swap.component */ "twiu");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-device-detector */ "9YtQ");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _directives_digits_only_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/digits-only.directive */ "NrID");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-loading */ "qC+V");
/* harmony import */ var _swapv1v2_swapv1v2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./swapv1v2/swapv1v2.component */ "rj6r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");









// import { NgxSpinnerModule } from "ngx-spinner";










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [ngx_device_detector__WEBPACK_IMPORTED_MODULE_8__["DeviceDetectorService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectModule"],
            ngx_loading__WEBPACK_IMPORTED_MODULE_14__["NgxLoadingModule"].forRoot({}),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
                timeOut: 3000,
                positionClass: 'toast-bottom-right',
                preventDuplicates: true,
                closeButton: true,
                easing: 'ease-in'
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _swap_swap_component__WEBPACK_IMPORTED_MODULE_4__["SwapComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
        _directives_digits_only_directive__WEBPACK_IMPORTED_MODULE_12__["DigitsOnlyDirective"],
        _swapv1v2_swapv1v2_component__WEBPACK_IMPORTED_MODULE_15__["SwapV1V2Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_14__["NgxLoadingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"]] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_metamask_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/metamask.service */ "T9tP");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-device-detector */ "9YtQ");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _swap_swap_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../swap/swap.service */ "5ak/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function HeaderComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" BSC TESTNET | ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx_r0.currentWalletbalance, "1.2-2"), " ");
} }
function HeaderComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ETHEREUM MAINNET | ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx_r1.currentWalletbalance, "1.2-2"), " ");
} }
function HeaderComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ETH TESTNET | ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx_r2.currentWalletbalance, "1.2-2"), " ");
} }
function HeaderComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.connectMetamask(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Connect Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rect", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "rect", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.walletaddress, " ");
} }
function HeaderComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Wrong Network");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(metamask, deviceService, toster, 
    // private spinner: NgxSpinnerService,
    swapservice) {
        this.metamask = metamask;
        this.deviceService = deviceService;
        this.toster = toster;
        this.swapservice = swapservice;
        this.isDeviceMobile = false;
        this.bscChain = false;
        this.ethChain = false;
        this.connectWallet = true;
        const isMobile = this.deviceService.isMobile();
        const isTablet = this.deviceService.isTablet();
        if (isMobile) {
            this.isDeviceMobile = true;
        }
        if (isTablet) {
            this.isDeviceMobile = true;
        }
    }
    ngOnInit() {
        if (window.location.pathname == "/swap") {
            sessionStorage.setItem('swapPage', "swapv1v2");
        }
        this.test();
    }
    test() {
        var _a, _b, _c, _d, _e, _f, _g;
        if (sessionStorage.getItem('swapPage') == "swap") {
            // console.log("Normal Swap ...");
            if (!this.isDeviceMobile) {
                if (((_a = window.ethereum) === null || _a === void 0 ? void 0 : _a.networkVersion) == "97" && sessionStorage.getItem('account_BSC')) {
                    this.connectWallet = false;
                    this.walletconnected = true;
                    this.wrongNetwrk = false;
                    let add = sessionStorage.getItem('account_BSC');
                    let start = add.substring(0, 6);
                    let end = add.slice(-4);
                    this.walletaddress = start + "...." + end;
                }
                else if (((_b = window.ethereum) === null || _b === void 0 ? void 0 : _b.networkVersion) == "250" && sessionStorage.getItem('account_ETH')) {
                    this.connectWallet = false;
                    this.walletconnected = true;
                    this.wrongNetwrk = false;
                    let add = sessionStorage.getItem('account_ETH');
                    let start = add.substring(0, 6);
                    let end = add.slice(-4);
                    this.walletaddress = start + "...." + end;
                }
                else if (!((_c = window === null || window === void 0 ? void 0 : window.ethereum) === null || _c === void 0 ? void 0 : _c.selectedAddress)) {
                    this.connectWallet = true;
                    this.walletconnected = false;
                    this.wrongNetwrk = false;
                    this.ethChain = false;
                    this.bscChain = false;
                }
                else {
                    this.connectWallet = false;
                    this.walletconnected = false;
                    this.wrongNetwrk = true;
                    this.ethChain = false;
                    this.bscChain = false;
                }
            }
            else {
                if (sessionStorage.getItem('chainId') == "97") {
                    this.connectWallet = false;
                    this.walletconnected = true;
                    this.wrongNetwrk = false;
                    this.bscChain = true;
                    this.ropstenChain = false;
                    this.ethChain = false;
                    let add = sessionStorage.getItem('account_ETH_trustWallet');
                    let start = add.substring(0, 6);
                    let end = add.slice(-4);
                    this.walletaddress = start + "...." + end;
                }
                else if (sessionStorage.getItem('chainId') == "250") {
                    this.connectWallet = false;
                    this.walletconnected = true;
                    this.wrongNetwrk = false;
                    this.bscChain = false;
                    this.ropstenChain = true;
                    this.ethChain = false;
                    let add = sessionStorage.getItem('account_ETH_trustWallet');
                    let start = add.substring(0, 6);
                    let end = add.slice(-4);
                    this.walletaddress = start + "...." + end;
                }
                else if (sessionStorage.getItem('account_ETH_trustWallet_wrongNetwork')) {
                    this.connectWallet = false;
                    this.walletconnected = false;
                    this.wrongNetwrk = true;
                    this.ethChain = false;
                    this.ropstenChain = false;
                    this.bscChain = false;
                }
                else {
                    this.connectWallet = true;
                    this.walletconnected = false;
                    this.wrongNetwrk = false;
                    this.ropstenChain = false;
                    this.ethChain = false;
                    this.bscChain = false;
                }
            }
            if (this.isDeviceMobile == false) {
                if (sessionStorage.getItem('account_BSC') && ((_d = window.ethereum) === null || _d === void 0 ? void 0 : _d.networkVersion) == "97") {
                    this.bscChain = true;
                }
                else {
                    this.bscChain = false;
                }
                if (sessionStorage.getItem('account_ETH') && ((_e = window.ethereum) === null || _e === void 0 ? void 0 : _e.networkVersion) == "250") {
                    this.ropstenChain = true;
                }
                else {
                    this.ropstenChain = false;
                }
            }
            //For Balance
            if (sessionStorage.getItem('bscBalance')) {
                let a = sessionStorage.getItem('bscBalance');
                this.currentWalletbalance = a / Math.pow(10, 18);
            }
            else if (sessionStorage.getItem('ethBalance')) {
                let a = sessionStorage.getItem('ethBalance');
                this.currentWalletbalance = a / Math.pow(10, 18);
            }
        }
        else if (sessionStorage.getItem('swapPage') == "swapv1v2") {
            // console.log("swapv1v2"); 
            // console.log(window.ethereum?.networkVersion)
            if (!this.isDeviceMobile) {
                if (((_f = window.ethereum) === null || _f === void 0 ? void 0 : _f.networkVersion) == "1" && sessionStorage.getItem('account_ropsten')) {
                    this.connectWallet = false;
                    this.walletconnected = true;
                    this.wrongNetwrk = false;
                    this.ethChain = true;
                    let add = sessionStorage.getItem('account_ropsten');
                    let start = add.substring(0, 6);
                    let end = add.slice(-4);
                    this.walletaddress = start + "...." + end;
                }
                else if (!((_g = window === null || window === void 0 ? void 0 : window.ethereum) === null || _g === void 0 ? void 0 : _g.selectedAddress)) {
                    this.connectWallet = true;
                    this.walletconnected = false;
                    this.wrongNetwrk = false;
                    this.ethChain = false;
                    this.bscChain = false;
                }
                else {
                    this.connectWallet = false;
                    this.walletconnected = false;
                    this.wrongNetwrk = true;
                    this.ethChain = false;
                    this.bscChain = false;
                }
            }
            else {
                if (sessionStorage.getItem('account_ETH_trustWallet')) {
                    this.connectWallet = false;
                    this.walletconnected = true;
                    this.wrongNetwrk = false;
                    this.ethChain = true;
                    let add = sessionStorage.getItem('account_ETH_trustWallet');
                    let start = add.substring(0, 6);
                    let end = add.slice(-4);
                    this.walletaddress = start + "...." + end;
                }
                else {
                    this.connectWallet = true;
                    this.walletconnected = false;
                    this.wrongNetwrk = false;
                    this.ethChain = false;
                    this.bscChain = false;
                }
            }
            //For Balance
            if (sessionStorage.getItem('account_ropsten')) {
                let a = sessionStorage.getItem('v1v2Balance');
                this.currentWalletbalance = a / Math.pow(10, 18);
            }
            if (sessionStorage.getItem('account_ETH_trustWallet')) {
                let a = sessionStorage.getItem('ETH_trustWallet_balance');
                this.currentWalletbalance = a / Math.pow(10, 18);
            }
        }
    }
    ngDoCheck() {
        this.test();
        console.log("header docheck");
    }
    connectMetamask() {
        if (this.isDeviceMobile) {
            this.metamask.walletProvider();
            // this.metamask.connectWalletHandler();
        }
        // else if (localStorage.getItem('walletconnect')){
        //   this.metamask.walletProvider();
        // }
        else {
            this.metamask.initMetaMask();
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_metamask_service__WEBPACK_IMPORTED_MODULE_1__["MetamaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__["DeviceDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_swap_swap_service__WEBPACK_IMPORTED_MODULE_4__["SwapService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 18, vars: 6, consts: [[1, "header", "fixed-top"], [1, "navbar", "navbar-expand-lg", "navbar-light"], ["routerLink", "/", 1, "navbar-brand", "p-0"], ["src", "assets/images/processed.jpeg", "width", "120"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "d-lg-flex", "justify-content-lg-end"], [1, "header-button", "mt-4", "mb-4", "mt-md-4", "mb-md-4", "mt-lg-0", "mb-lg-0", "d-flex"], ["routerLink", "/swap", 1, "btn", "btn-outline", "mr-2", "mt-lg-0", "mt-md-0", "mt-sm-0", "mt-3"], ["src", "assets/images/5.png", "width", "20", 1, "mr-2"], [4, "ngIf"], ["type", "submit", 1, "btn", "btn-outline", "btn", "mr-2"], ["src", "assets/images/bsclogo.png", "width", "15px"], ["src", "assets/images/ethlogo.png", "width", "15px"], ["type", "submit", 1, "btn", "btn-outline", "mr-2", "mt-lg-0", "mt-md-0", "mt-sm-0", "mt-3", 3, "click"], [1, "btn", "btn-outline", "mr-2", "mt-lg-0", "mt-md-0", "mt-sm-0", "mt-3"], ["x", "0", "y", "0", "width", "20", "height", "20", 2, "border-radius", "100px", "background-color", "#ff7841"], ["x", "0", "y", "0", "width", "32", "height", "32", "transform", "translate(0.015155733715397232 3.5633515129442204) rotate(246.0 16 16)", "fill", "#03415E"], ["x", "0", "y", "0", "width", "28", "height", "28", "transform", "translate(-19.663591713754506 3.2352123687940164) rotate(231.9 16 16)", "fill", "#1876F2"], ["x", "0", "y", "0", "width", "28", "height", "28", "transform", "translate(-27.811359200588324 -0.8874574204753309) rotate(278.4 16 16)", "fill", "#FB183A"], [1, "btn", "btn-outline", "mr-2", "mt-lg-0", "mt-md-0", "mt-sm-0", "mt-3", 2, "background", "red !important", "color", "white !important", "font-weight", "500 !important"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Swap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_div_12_Template, 5, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_div_13_Template, 5, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_div_14_Template, 5, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_div_15_Template, 4, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_div_16_Template, 7, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeaderComponent_div_17_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bscChain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ethChain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ropstenChain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.connectWallet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.walletconnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wrongNetwrk);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]], styles: [".header[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.06) 7px 2px 26px 0px;\n  background-color: #fffcf5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0RBQUE7RUFDQSx5QkFBQTtBQUNKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyA2JSkgN3B4IDJweCAyNnB4IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZjZjU7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 7, vars: 0, consts: [["routerLink", "/swap", 1, "btn", "btn-outline", "btn", 2, "margin-top", "5px"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Oops! Page not found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Go back in initial page, is better.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,300,500);\nbody[_ngcontent-%COMP%] {\n  background-color: #fffcf5;\n  color: #fff;\n  font-size: 100%;\n  line-height: 1.5;\n  font-family: \"Roboto\", sans-serif;\n  text-align: center;\n}\n.button[_ngcontent-%COMP%] {\n  font-weight: 300;\n  color: #fff;\n  font-size: 1.2em;\n  text-decoration: none;\n  border: 1px solid #efefef;\n  padding: 0.5em;\n  border-radius: 3px;\n  float: left;\n  margin: 6em 0 0 -155px;\n  left: 50%;\n  position: relative;\n  transition: all 0.3s linear;\n}\n.button[_ngcontent-%COMP%]:hover {\n  background-color: #FF9300;\n  color: #fff;\n}\np[_ngcontent-%COMP%] {\n  font-size: 2em;\n  text-align: center;\n  font-weight: 100;\n  color: #FF9300;\n}\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 15em;\n  font-weight: 100;\n  color: #FF9300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxccGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMkVBQUE7QUFFUjtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFBRjtBQUdBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBQUY7QUFHQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBRiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDEwMCwzMDAsNTAwKTtcclxuXHJcbmJvZHkgeyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmY2Y1OyBcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcclxuICBwYWRkaW5nOiAuNWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDZlbSAwIDAgLTE1NXB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjkzMDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIGNvbG9yOiAjRkY5MzAwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTVlbTtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIGNvbG9yOiAjRkY5MzAwO1xyXG4gIC8vIHRleHQtc2hhZG93OiAjMDA2MmNjIDFweCAxcHgsICMwMDYyY2MgMnB4IDJweCwgIzAwNjJjYyAzcHggM3B4LCAjMDA2MmNkIDRweCA0cHgsICMwMDYyY2QgNXB4IDVweCwgIzAwNjJjZCA2cHggNnB4LCAjMDA2MmNkIDdweCA3cHgsICMwMDYyY2UgOHB4IDhweCwgIzAwNjNjZSA5cHggOXB4LCAjMDA2M2NlIDEwcHggMTBweCwgIzAwNjNjZSAxMXB4IDExcHgsICMwMDYzY2YgMTJweCAxMnB4LCAjMDA2M2NmIDEzcHggMTNweCwgIzAwNjNjZiAxNHB4IDE0cHgsICMwMDYzY2YgMTVweCAxNXB4LCAjMDA2M2QwIDE2cHggMTZweCwgIzAwNjRkMCAxN3B4IDE3cHgsICMwMDY0ZDAgMThweCAxOHB4LCAjMDA2NGQwIDE5cHggMTlweCwgIzAwNjRkMSAyMHB4IDIwcHgsICMwMDY0ZDEgMjFweCAyMXB4LCAjMDA2NGQxIDIycHggMjJweCwgIzAwNjRkMSAyM3B4IDIzcHgsICMwMDY0ZDIgMjRweCAyNHB4LCAjMDA2NWQyIDI1cHggMjVweCwgIzAwNjVkMiAyNnB4IDI2cHgsICMwMDY1ZDIgMjdweCAyN3B4LCAjMDA2NWQzIDI4cHggMjhweCwgIzAwNjVkMyAyOXB4IDI5cHgsICMwMDY1ZDMgMzBweCAzMHB4LCAjMDA2NWQzIDMxcHggMzFweCwgIzAwNjVkNCAzMnB4IDMycHgsICMwMDY1ZDQgMzNweCAzM3B4LCAjMDA2NmQ0IDM0cHggMzRweCwgIzAwNjZkNCAzNXB4IDM1cHgsICMwMDY2ZDUgMzZweCAzNnB4LCAjMDA2NmQ1IDM3cHggMzdweCwgIzAwNjZkNSAzOHB4IDM4cHgsICMwMDY2ZDUgMzlweCAzOXB4LCAjMDA2NmQ2IDQwcHggNDBweCwgIzAwNjZkNiA0MXB4IDQxcHgsICMwMDY3ZDYgNDJweCA0MnB4LCAjMDA2N2Q2IDQzcHggNDNweCwgIzAwNjdkNyA0NHB4IDQ0cHgsICMwMDY3ZDcgNDVweCA0NXB4LCAjMDA2N2Q3IDQ2cHggNDZweCwgIzAwNjdkNyA0N3B4IDQ3cHgsICMwMDY3ZDggNDhweCA0OHB4LCAjMDA2N2Q4IDQ5cHggNDlweCwgIzAwNjhkOCA1MHB4IDUwcHgsICMwMDY4ZDkgNTFweCA1MXB4LCAjMDA2OGQ5IDUycHggNTJweCwgIzAwNjhkOSA1M3B4IDUzcHgsICMwMDY4ZDkgNTRweCA1NHB4LCAjMDA2OGRhIDU1cHggNTVweCwgIzAwNjhkYSA1NnB4IDU2cHgsICMwMDY4ZGEgNTdweCA1N3B4LCAjMDA2OGRhIDU4cHggNThweCwgIzAwNjlkYiA1OXB4IDU5cHgsICMwMDY5ZGIgNjBweCA2MHB4LCAjMDA2OWRiIDYxcHggNjFweCwgIzAwNjlkYiA2MnB4IDYycHgsICMwMDY5ZGMgNjNweCA2M3B4LCAjMDA2OWRjIDY0cHggNjRweCwgIzAwNjlkYyA2NXB4IDY1cHgsICMwMDY5ZGMgNjZweCA2NnB4LCAjMDA2YWRkIDY3cHggNjdweCwgIzAwNmFkZCA2OHB4IDY4cHgsICMwMDZhZGQgNjlweCA2OXB4LCAjMDA2YWRkIDcwcHggNzBweCwgIzAwNmFkZSA3MXB4IDcxcHgsICMwMDZhZGUgNzJweCA3MnB4LCAjMDA2YWRlIDczcHggNzNweCwgIzAwNmFkZSA3NHB4IDc0cHgsICMwMDZiZGYgNzVweCA3NXB4LCAjMDA2YmRmIDc2cHggNzZweCwgIzAwNmJkZiA3N3B4IDc3cHgsICMwMDZiZGYgNzhweCA3OHB4LCAjMDA2YmUwIDc5cHggNzlweCwgIzAwNmJlMCA4MHB4IDgwcHgsICMwMDZiZTAgODFweCA4MXB4LCAjMDA2YmUwIDgycHggODJweCwgIzAwNmJlMSA4M3B4IDgzcHgsICMwMDZjZTEgODRweCA4NHB4LCAjMDA2Y2UxIDg1cHggODVweCwgIzAwNmNlMSA4NnB4IDg2cHgsICMwMDZjZTIgODdweCA4N3B4LCAjMDA2Y2UyIDg4cHggODhweCwgIzAwNmNlMiA4OXB4IDg5cHgsICMwMDZjZTIgOTBweCA5MHB4LCAjMDA2Y2UzIDkxcHggOTFweCwgIzAwNmRlMyA5MnB4IDkycHgsICMwMDZkZTMgOTNweCA5M3B4LCAjMDA2ZGUzIDk0cHggOTRweCwgIzAwNmRlNCA5NXB4IDk1cHgsICMwMDZkZTQgOTZweCA5NnB4LCAjMDA2ZGU0IDk3cHggOTdweCwgIzAwNmRlNCA5OHB4IDk4cHgsICMwMDZkZTUgOTlweCA5OXB4LCAjMDA2ZWU1IDEwMHB4IDEwMHB4LCAjMDA2ZWU1IDEwMXB4IDEwMXB4LCAjMDA2ZWU2IDEwMnB4IDEwMnB4LCAjMDA2ZWU2IDEwM3B4IDEwM3B4LCAjMDA2ZWU2IDEwNHB4IDEwNHB4LCAjMDA2ZWU2IDEwNXB4IDEwNXB4LCAjMDA2ZWU3IDEwNnB4IDEwNnB4LCAjMDA2ZWU3IDEwN3B4IDEwN3B4LCAjMDA2ZWU3IDEwOHB4IDEwOHB4LCAjMDA2ZmU3IDEwOXB4IDEwOXB4LCAjMDA2ZmU4IDExMHB4IDExMHB4LCAjMDA2ZmU4IDExMXB4IDExMXB4LCAjMDA2ZmU4IDExMnB4IDExMnB4LCAjMDA2ZmU4IDExM3B4IDExM3B4LCAjMDA2ZmU5IDExNHB4IDExNHB4LCAjMDA2ZmU5IDExNXB4IDExNXB4LCAjMDA2ZmU5IDExNnB4IDExNnB4LCAjMDA3MGU5IDExN3B4IDExN3B4LCAjMDA3MGVhIDExOHB4IDExOHB4LCAjMDA3MGVhIDExOXB4IDExOXB4LCAjMDA3MGVhIDEyMHB4IDEyMHB4LCAjMDA3MGVhIDEyMXB4IDEyMXB4LCAjMDA3MGViIDEyMnB4IDEyMnB4LCAjMDA3MGViIDEyM3B4IDEyM3B4LCAjMDA3MGViIDEyNHB4IDEyNHB4LCAjMDA3MWViIDEyNXB4IDEyNXB4LCAjMDA3MWVjIDEyNnB4IDEyNnB4LCAjMDA3MWVjIDEyN3B4IDEyN3B4LCAjMDA3MWVjIDEyOHB4IDEyOHB4LCAjMDA3MWVjIDEyOXB4IDEyOXB4LCAjMDA3MWVkIDEzMHB4IDEzMHB4LCAjMDA3MWVkIDEzMXB4IDEzMXB4LCAjMDA3MWVkIDEzMnB4IDEzMnB4LCAjMDA3MWVkIDEzM3B4IDEzM3B4LCAjMDA3MmVlIDEzNHB4IDEzNHB4LCAjMDA3MmVlIDEzNXB4IDEzNXB4LCAjMDA3MmVlIDEzNnB4IDEzNnB4LCAjMDA3MmVlIDEzN3B4IDEzN3B4LCAjMDA3MmVmIDEzOHB4IDEzOHB4LCAjMDA3MmVmIDEzOXB4IDEzOXB4LCAjMDA3MmVmIDE0MHB4IDE0MHB4LCAjMDA3MmVmIDE0MXB4IDE0MXB4LCAjMDA3M2YwIDE0MnB4IDE0MnB4LCAjMDA3M2YwIDE0M3B4IDE0M3B4LCAjMDA3M2YwIDE0NHB4IDE0NHB4LCAjMDA3M2YwIDE0NXB4IDE0NXB4LCAjMDA3M2YxIDE0NnB4IDE0NnB4LCAjMDA3M2YxIDE0N3B4IDE0N3B4LCAjMDA3M2YxIDE0OHB4IDE0OHB4LCAjMDA3M2YxIDE0OXB4IDE0OXB4LCAjMDA3NGYyIDE1MHB4IDE1MHB4LCAjMDA3NGYyIDE1MXB4IDE1MXB4LCAjMDA3NGYyIDE1MnB4IDE1MnB4LCAjMDA3NGYzIDE1M3B4IDE1M3B4LCAjMDA3NGYzIDE1NHB4IDE1NHB4LCAjMDA3NGYzIDE1NXB4IDE1NXB4LCAjMDA3NGYzIDE1NnB4IDE1NnB4LCAjMDA3NGY0IDE1N3B4IDE1N3B4LCAjMDA3NGY0IDE1OHB4IDE1OHB4LCAjMDA3NWY0IDE1OXB4IDE1OXB4LCAjMDA3NWY0IDE2MHB4IDE2MHB4LCAjMDA3NWY1IDE2MXB4IDE2MXB4LCAjMDA3NWY1IDE2MnB4IDE2MnB4LCAjMDA3NWY1IDE2M3B4IDE2M3B4LCAjMDA3NWY1IDE2NHB4IDE2NHB4LCAjMDA3NWY2IDE2NXB4IDE2NXB4LCAjMDA3NWY2IDE2NnB4IDE2NnB4LCAjMDA3NmY2IDE2N3B4IDE2N3B4LCAjMDA3NmY2IDE2OHB4IDE2OHB4LCAjMDA3NmY3IDE2OXB4IDE2OXB4LCAjMDA3NmY3IDE3MHB4IDE3MHB4LCAjMDA3NmY3IDE3MXB4IDE3MXB4LCAjMDA3NmY3IDE3MnB4IDE3MnB4LCAjMDA3NmY4IDE3M3B4IDE3M3B4LCAjMDA3NmY4IDE3NHB4IDE3NHB4LCAjMDA3N2Y4IDE3NXB4IDE3NXB4LCAjMDA3N2Y4IDE3NnB4IDE3NnB4LCAjMDA3N2Y5IDE3N3B4IDE3N3B4LCAjMDA3N2Y5IDE3OHB4IDE3OHB4LCAjMDA3N2Y5IDE3OXB4IDE3OXB4LCAjMDA3N2Y5IDE4MHB4IDE4MHB4LCAjMDA3N2ZhIDE4MXB4IDE4MXB4LCAjMDA3N2ZhIDE4MnB4IDE4MnB4LCAjMDA3N2ZhIDE4M3B4IDE4M3B4LCAjMDA3OGZhIDE4NHB4IDE4NHB4LCAjMDA3OGZiIDE4NXB4IDE4NXB4LCAjMDA3OGZiIDE4NnB4IDE4NnB4LCAjMDA3OGZiIDE4N3B4IDE4N3B4LCAjMDA3OGZiIDE4OHB4IDE4OHB4LCAjMDA3OGZjIDE4OXB4IDE4OXB4LCAjMDA3OGZjIDE5MHB4IDE5MHB4LCAjMDA3OGZjIDE5MXB4IDE5MXB4LCAjMDA3OWZjIDE5MnB4IDE5MnB4LCAjMDA3OWZkIDE5M3B4IDE5M3B4LCAjMDA3OWZkIDE5NHB4IDE5NHB4LCAjMDA3OWZkIDE5NXB4IDE5NXB4LCAjMDA3OWZkIDE5NnB4IDE5NnB4LCAjMDA3OWZlIDE5N3B4IDE5N3B4LCAjMDA3OWZlIDE5OHB4IDE5OHB4LCAjMDA3OWZlIDE5OXB4IDE5OXB4LCAjMDA3YWZmIDIwMHB4IDIwMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "rj6r":
/*!************************************************!*\
  !*** ./src/app/swapv1v2/swapv1v2.component.ts ***!
  \************************************************/
/*! exports provided: SwapV1V2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapV1V2Component", function() { return SwapV1V2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "Vx+w");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "meUc");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @walletconnect/web3-provider */ "Lq9n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_metamask_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/metamask.service */ "T9tP");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-device-detector */ "9YtQ");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _swapv1v2_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./swapv1v2.service */ "P/EV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _directives_digits_only_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../directives/digits-only.directive */ "NrID");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-loading */ "qC+V");
















function SwapV1V2Component_ng_template_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "b", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", item_r4.logo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4.name);
} }
function SwapV1V2Component_ng_template_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "b", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", item_r5.logo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r5.names);
} }
function SwapV1V2Component_span_96_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SwapV1V2Component_span_96_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.connectMetamask(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Connect Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SwapV1V2Component_span_97_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SwapV1V2Component_span_97_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.swapETH(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Swap ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class SwapV1V2Component {
    constructor(metamask, deviceService, toster, 
    // private spinner: NgxSpinnerService,
    swapservice, decimalpipe) {
        this.metamask = metamask;
        this.deviceService = deviceService;
        this.toster = toster;
        this.swapservice = swapservice;
        this.decimalpipe = decimalpipe;
        this.loading = false;
        //JSON For AllCryptocurrencies List
        this.allCryptoList = [
            { id: 1, name: 'V1', logo: 'assets/images/ethlogo.png' },
        ];
        this.allCryptoList1 = [
            { id: 3, names: 'V2', logo: 'assets/images/ethlogo.png' },
        ];
        //FROM and TO 
        this.userform = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            from: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            FromCrypto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            ToCrypto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.isDeviceMobile = false;
        this.isGetWalletBal = false;
        this.isTrustWalletConnected = false;
        this.walletConnectApproveRes = false;
        this.walletConnectErrorRes = false;
        this.transactionHashAfterTrans = "";
        this.swapEnable = false;
        this.walletConnectUserAddress = sessionStorage.getItem('account_ETH_trustWallet');
        //Form
        this.insuffBalError = false;
        this.tokenAbi = {};
        this.getweb3 = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const provider = new _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4__["default"]({
                infuraId: _config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].infuraId,
            });
            this.web3 = new web3__WEBPACK_IMPORTED_MODULE_3___default.a(provider);
        });
        const isMobile = this.deviceService.isMobile();
        const isTablet = this.deviceService.isTablet();
        if (isMobile) {
            this.isDeviceMobile = true;
        }
        if (isTablet) {
            this.isDeviceMobile = true;
        }
    }
    ngOnInit() {
        sessionStorage.setItem('swapPage', "swapv1v2");
        // localStorage.clear();
        //   sessionStorage.clear(); 
        this.isGetWalletBal = true;
        if (!this.isDeviceMobile) {
            this.metamask.checkMetaMaskInitial();
            this.metamask.initMetaMask();
            // if (typeof window.web3 !== 'undefined') {
            //   this.web3 = new Web3(window.web3.currentProvider);
            // } else {
            //   //this.web3 = new Web3.providers.HttpProvider(appConfig.web3ProviderUrl);
            //   this.web3 = new Web3.providers.HttpProvider('http://localhost:4200');
            // }
            if (window.ethereum === undefined) {
                this.toster.error('Non-Ethereum browser detected. Install MetaMask');
            }
            else {
                if (typeof window.ethereum !== 'undefined') {
                    //this.web3 = window.ethereum;
                    this.web3 = new web3__WEBPACK_IMPORTED_MODULE_3___default.a(window.ethereum);
                    this.swapEnable = true;
                }
                else {
                    this.web3 = new web3__WEBPACK_IMPORTED_MODULE_3___default.a.providers.HttpProvider('http://localhost:4200');
                }
            }
        }
        else {
            // if(localStorage.getItem('walletconnect')){
            // this.metamask.walletProvider();
            this.walletProvider();
            // this.getweb3();
            this.metamask.connectWalletHandler();
            // }
        }
        this.get_set_Accounts();
    }
    ngDoCheck() {
        //  this.loading=true
        this.get_set_Accounts();
    }
    get_set_Accounts() {
        var _a, _b;
        if (!this.isDeviceMobile && window.ethereum && window.ethereum._state && window.ethereum._state.accounts && window.ethereum._state.accounts.length) {
            if (window.ethereum._state.accounts[0] === undefined) {
                window.ethereum;
                this.metamask.metaMaskUpdate();
            }
            else {
                this.metamask.metaMaskUpdated();
                if (((_a = window.ethereum) === null || _a === void 0 ? void 0 : _a.networkVersion) == "1") {
                    sessionStorage.setItem('account_ropsten', window.ethereum._state.accounts[0]);
                }
            }
        }
        // else if(localStorage.getItem('-walletlink:https://www.walletlink.org:Addresses')){
        // }
        else {
            if (this.isDeviceMobile && sessionStorage.getItem('account')) {
                let address = sessionStorage.getItem('account');
                if (sessionStorage.getItem('account_ETH_trustWallet') != undefined && sessionStorage.getItem('account_ETH_trustWallet') != null) {
                    // this.isTrustWalletConnected=true;
                }
                else {
                    sessionStorage.removeItem("account_ETH_trustWallet");
                }
            }
            else {
                // sessionStorage.clear();
                // this.metamask.checkMetaMaskInitial();
                // this.metamask.initMetaMask();
            }
        }
        if (((_b = window.ethereum) === null || _b === void 0 ? void 0 : _b.networkVersion) == "1") {
        }
        else {
            sessionStorage.removeItem('account_ropsten');
            sessionStorage.removeItem('v1v2Balance');
            // sessionStorage.clear();
            // this.toster.warning("Please Select ETH or BSC Network")
        }
        this.check_get_Balance();
    }
    check_get_Balance() {
        // GET Wallet Balance
        if (this.isGetWalletBal) {
            if (sessionStorage.getItem('account_ropsten')) {
                let bscWalletAddress = sessionStorage.getItem('account_ropsten');
                let contractAdd = _config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].contraceAddressV1;
                this.swapservice.getv1v2Balance(bscWalletAddress, contractAdd).subscribe((result) => {
                    if (result.Tokens == undefined) {
                        sessionStorage.setItem('v1v2Balance', "0");
                        // console.log(result.Tokens)
                        this.isGetWalletBal = false;
                    }
                    else {
                        sessionStorage.setItem('v1v2Balance', result.Tokens);
                        // console.log(result.Tokens)
                        this.isGetWalletBal = false;
                    }
                });
            }
            if (sessionStorage.getItem('account_ETH_trustWallet')) {
                let WalletAddress = sessionStorage.getItem('account_ETH_trustWallet');
                let contractAdd = _config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].contraceAddressV1;
                this.swapservice.getv1v2Balance(WalletAddress, contractAdd).subscribe((result) => {
                    if (result.Tokens == undefined) {
                        sessionStorage.setItem('ETH_trustWallet_balance', "0");
                        // console.log(result.Tokens)
                        this.isGetWalletBal = false;
                    }
                    else {
                        sessionStorage.setItem('ETH_trustWallet_balance', result.Tokens);
                        // console.log(result.Tokens)
                        this.isGetWalletBal = false;
                    }
                });
            }
        }
    }
    ngAfterContentInit() {
        this.loading = true;
        setTimeout(() => {
            var _a;
            this.loading = false;
            if (!this.isDeviceMobile) {
                if (((_a = window.ethereum) === null || _a === void 0 ? void 0 : _a.networkVersion) == "1" && sessionStorage.getItem('account_ropsten')) {
                    // this.bscSwap = false;
                    this.swapEnable = true;
                    this.ethSwap = true;
                    this.walletConnect = false;
                    this.insuffBalError = false;
                    this.userform.patchValue({
                        FromCrypto: "V1",
                        ToCrypto: "V2"
                    });
                    //this.isSelected="ETH";
                }
                else {
                    this.walletConnect = true;
                    // this.bscSwap=false;
                    this.swapEnable = false;
                    this.ethSwap = false;
                    this.insuffBalError = false;
                    this.userform.patchValue({
                        FromCrypto: "V1",
                        ToCrypto: "V2"
                    });
                    //this.isSelected="BSC";
                }
            }
            else {
                if (sessionStorage.getItem('account_ETH_trustWallet')) {
                    this.swapEnable = false;
                    this.ethSwap = false;
                    this.walletConnect = false;
                    this.insuffBalError = false;
                    this.isTrustWalletConnected = true;
                    this.userform.patchValue({
                        FromCrypto: "V1",
                        ToCrypto: "V2"
                    });
                }
                else {
                    this.walletConnect = true;
                    // this.bscSwap=false;
                    this.swapEnable = false;
                    this.ethSwap = false;
                    this.insuffBalError = false;
                    this.isTrustWalletConnected = false;
                    this.userform.patchValue({
                        FromCrypto: "V1",
                        ToCrypto: "V2"
                    });
                }
            }
        }, 3000);
    }
    getFromValue(value) {
        if (value == 0 || value == "") {
            this.toster.info("Enter Value");
            this.userform.patchValue({
                to: ""
            });
        }
        // else{
        this.userform.patchValue({
            to: this.decimalpipe.transform(this.userform.controls.from.value, '1.2-2')
        });
        if (sessionStorage.getItem('v1v2Balance') && localStorage.getItem('networkStatus') == "right") {
            let fromVal = BigInt(value * Math.pow(10, 18));
            this.currentWalletBalance = sessionStorage.getItem('v1v2Balance');
            if (fromVal <= this.currentWalletBalance) {
                this.walletConnect = false;
                this.swapEnable = true;
                this.isTrustWalletConnected = false;
                this.insuffBalError = false;
            }
            else {
                this.walletConnect = false;
                this.swapEnable = false;
                this.isTrustWalletConnected = false;
                this.insuffBalError = true;
            }
        }
        else if (sessionStorage.getItem('ETH_trustWallet_balance')) {
            let fromVal = BigInt(value * Math.pow(10, 18));
            this.currentWalletBalance = sessionStorage.getItem('ETH_trustWallet_balance');
            if (fromVal <= parseInt(this.currentWalletBalance)) {
                this.walletConnect = false;
                this.swapEnable = false;
                this.isTrustWalletConnected = true;
                this.insuffBalError = false;
            }
            else {
                this.walletConnect = false;
                this.swapEnable = false;
                this.isTrustWalletConnected = false;
                this.insuffBalError = true;
            }
        }
    }
    getFrom(value) {
        if (value == "BSC") {
            this.isSelected = "BSC";
            this.userform.patchValue({
                FromCrypto: "BSC"
            });
            this.userform.patchValue({
                ToCrypto: "ETH"
            });
            this.getFromValue(this.userform.controls.from.value);
        }
        else {
            this.isSelected = "ETH";
            this.userform.patchValue({
                FromCrypto: "ETH"
            });
            this.userform.patchValue({
                ToCrypto: "BSC"
            });
            this.getFromValue(this.userform.controls.from.value);
        }
        // console.log("You have selected =" , this.isSelected);
    }
    getTo(value) {
        if (value == "BSC") {
            this.userform.patchValue({
                FromCrypto: "ETH"
            });
            this.userform.patchValue({
                ToCrypto: "BSC"
            });
        }
        else {
            this.userform.patchValue({
                FromCrypto: "BSC"
            });
            this.userform.patchValue({
                ToCrypto: "ETH"
            });
        }
    }
    swapETH() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.userform.controls.from.value) {
                if (sessionStorage.getItem('account_ropsten')) {
                    let fromVal = BigInt(this.userform.value.from * Math.pow(10, 18));
                    this.toster.warning('Please don\'t refresh, transaction is processing.');
                    this.loading = true;
                    //for approve method
                    this.tokenAbi = {};
                    this.tokenAbi = _config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].tokenAddressV1;
                    let EthcontractAddressV1 = _config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].contraceAddressV1;
                    let userAddress = sessionStorage.getItem('account_ropsten');
                    const data = {
                        spender: _config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].contractAddressV1V2Approve,
                        amount: window.web3.utils.toBN(this.userform.controls.from.value + '000000000000000000') //BigInt(this.userform.controls.from.value * Math.pow(10, 18)),
                    };
                    let instance = new this.web3.eth.Contract(this.tokenAbi, EthcontractAddressV1);
                    const gasPrice = yield this.web3.eth.getGasPrice();
                    // console.log("Approve amount =  >", data.amount);
                    this.web3.eth.sendTransaction({
                        from: userAddress,
                        to: EthcontractAddressV1,
                        value: 0x0,
                        gasPrice: gasPrice,
                        data: instance.methods.approve(data.spender, data.amount).encodeABI()
                    }).then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        // console.log("approve response  == ", res);
                        let transactionHashApprove = res.transactionHash;
                        // console.log("your approve transaction hash is = ", transactionHashApprove);
                        //for swap method
                        if (transactionHashApprove.length > 0) {
                            this.toster.warning('Please don\'t refresh, transaction is processing.');
                            let migratetokentokenAbi = {};
                            migratetokentokenAbi = _config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].tokenV1V2;
                            let migratetokenContractAddress = _config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].contractAddressV1V2Approve;
                            let userAddress = sessionStorage.getItem('account_ropsten');
                            const data = {
                                amount: window.web3.utils.toBN(this.userform.controls.from.value + '000000000000000000') //BigInt(this.userform.controls.from.value * Math.pow(10, 18)),
                            };
                            let migratetokeninstance = new this.web3.eth.Contract(migratetokentokenAbi, migratetokenContractAddress);
                            const gasPrice = yield this.web3.eth.getGasPrice();
                            // console.log("migration amount =  >", data.amount);
                            this.web3.eth.sendTransaction({
                                from: userAddress,
                                to: migratetokenContractAddress,
                                //value: this.web3.utils.toHex(this.ethBridgeFee) ,
                                gasPrice: gasPrice,
                                data: migratetokeninstance.methods.migratetoken(EthcontractAddressV1, data.amount).encodeABI()
                            }).then((res) => {
                                // console.log("swap response  == ", res);
                                let transactionHash = res.transactionHash;
                                this.transactionHashAfterTrans = res.transactionHash;
                                let button = document.getElementById("trbutton");
                                button.click();
                                // console.log("your swap transaction hash is = ", transactionHash);
                                this.swapservice.ethSwap(transactionHash).subscribe((result) => {
                                    // console.log('final eth response = ',result);
                                    this.check_get_Balance();
                                    this.toster.success(result.message);
                                    this.loading = false;
                                    //For Clear both Input Type boxes
                                    setTimeout(() => {
                                        this.userform.patchValue({
                                            from: 0
                                        });
                                        this.userform.patchValue({
                                            to: 0
                                        });
                                    }, 4000);
                                });
                            }).catch((err) => {
                                this.toster.error(err.message);
                                this.loading = false;
                            });
                        }
                        else {
                            this.toster.error("Something went wrong");
                            this.loading = false;
                        }
                    })).catch((err) => {
                        this.toster.error(err.message);
                        this.loading = false;
                    });
                }
                else {
                    this.toster.error("Connect to " + this.isSelected + " Network");
                }
            }
            else {
                this.toster.info("Enter Value");
            }
        });
    }
    swapETHOnWalletConnect() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.userform.controls.from.value) {
                if (sessionStorage.getItem('account_ETH_trustWallet')) {
                    // let fromVal = BigInt(this.userform.value.from * Math.pow(10, 18));
                    //   this.toster.warning('Please don\'t refresh, transaction is processing.');
                    //   this.loading=true;
                    //for approve method
                    this.tokenAbi = {};
                    // this.web3= new Web3(window.web3.currentProvider);
                    this.tokenAbi = _config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].tokenAddressV1;
                    let EthcontractAddressV1 = _config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].contraceAddressV1;
                    let userAddress = sessionStorage.getItem('account_ETH_trustWallet');
                    const data = {
                        spender: _config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].contractAddressV1V2Approve,
                        amount: BigInt(this.userform.controls.from.value * Math.pow(10, 18)),
                    };
                    let instance = new this.web3.eth.Contract(this.tokenAbi, EthcontractAddressV1);
                    const gasPrice = yield this.web3.eth.getGasPrice();
                    window.connector.sendTransaction({
                        from: userAddress,
                        to: EthcontractAddressV1,
                        value: 0x0,
                        gasPrice: gasPrice,
                        data: instance.methods.approve(data.spender, data.amount).encodeABI()
                    }).then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        // console.log("approve response  == ", res);
                        this.walletConnectApproveRes = true;
                        let transactionHashApprove = res.transactionHash;
                        // console.log("your approve transaction hash is = ", transactionHashApprove);
                        //for swap method
                        if (transactionHashApprove.length > 0) {
                            this.toster.warning('Please don\'t refresh, transaction is processing.');
                            let migratetokentokenAbi = {};
                            migratetokentokenAbi = _config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].tokenV1V2;
                            let migratetokenContractAddress = _config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].contractAddressV1V2Approve;
                            let userAddress = sessionStorage.getItem('account_ETH_trustWallet');
                            const data = {
                                amount: BigInt(this.userform.controls.from.value * Math.pow(10, 18)),
                            };
                            let migratetokeninstance = new this.web3.eth.Contract(migratetokentokenAbi, migratetokenContractAddress);
                            const gasPrice = yield this.web3.eth.getGasPrice();
                            window.connector.sendTransaction({
                                from: userAddress,
                                to: migratetokenContractAddress,
                                //value: this.web3.utils.toHex(this.ethBridgeFee) ,
                                gasPrice: gasPrice,
                                data: migratetokeninstance.methods.migratetoken(EthcontractAddressV1, data.amount).encodeABI()
                            }).then((res) => {
                                // console.log("swap response  == ", res);
                                let transactionHash = res.transactionHash;
                                // console.log("your swap transaction hash is = ", transactionHash);
                                this.swapservice.ethSwap(transactionHash).subscribe((result) => {
                                    // console.log('final eth response = ',result);
                                    this.check_get_Balance();
                                    this.toster.success(result.message);
                                    this.loading = false;
                                    //For Clear both Input Type boxes
                                    this.userform.patchValue({
                                        from: 0
                                    });
                                    this.userform.patchValue({
                                        to: 0
                                    });
                                });
                            }).catch((err) => {
                                this.walletConnectErrorRes = true;
                                this.toster.error(err.message);
                                this.loading = false;
                            });
                            setTimeout(() => {
                                if (!this.walletConnectErrorRes) {
                                    this.swapservice.getTransactionByAddress(this.walletConnectUserAddress).subscribe((success) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                        let transactionHashApprove = success["result"][0];
                                        let time = parseInt(transactionHashApprove === null || transactionHashApprove === void 0 ? void 0 : transactionHashApprove.timeStamp);
                                        //if (new Date((time + 100) * 1000) > new Date()) {
                                        // console.log("swap response  == ", transactionHashApprove.hash);
                                        let transactionHash = transactionHashApprove === null || transactionHashApprove === void 0 ? void 0 : transactionHashApprove.hash;
                                        this.transactionHashAfterTrans = transactionHash;
                                        let button = document.getElementById("trbutton");
                                        button.click();
                                        // console.log("your swap transaction hash is = ", transactionHash);
                                        this.swapservice.ethSwap(transactionHash).subscribe((result) => {
                                            // console.log('final eth response = ',result);
                                            this.check_get_Balance();
                                            this.toster.success(result.message);
                                            this.loading = false;
                                            //For Clear both Input Type boxes
                                            this.userform.patchValue({
                                                from: 0
                                            });
                                            this.userform.patchValue({
                                                to: 0
                                            });
                                        });
                                        //}
                                    }), (error) => {
                                        this.toster.error("Something went wrong");
                                        this.loading = false;
                                    });
                                }
                            }, 60 * 1000);
                        }
                        else {
                            this.toster.error("Something went wrong");
                            this.loading = false;
                        }
                    })).catch((err) => {
                        this.toster.error(err.message);
                        this.loading = false;
                    });
                    setTimeout(() => {
                        if (!this.walletConnectApproveRes) {
                            this.swapservice.getTransactionByAddress(this.walletConnectUserAddress).subscribe((success) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                let transactionHashApprove = success["result"][0];
                                let time = parseInt(transactionHashApprove === null || transactionHashApprove === void 0 ? void 0 : transactionHashApprove.timeStamp);
                                if (new Date((time + 100) * 1000) > new Date()) {
                                    this.toster.warning('Please don\'t refresh, transaction is processing.');
                                    let migratetokentokenAbi = {};
                                    migratetokentokenAbi = _config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].tokenV1V2;
                                    let migratetokenContractAddress = _config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].contractAddressV1V2Approve;
                                    let userAddress = sessionStorage.getItem('account_ETH_trustWallet');
                                    const data = {
                                        amount: BigInt(this.userform.controls.from.value * Math.pow(10, 18)),
                                    };
                                    let migratetokeninstance = new this.web3.eth.Contract(migratetokentokenAbi, migratetokenContractAddress);
                                    const gasPrice = yield this.web3.eth.getGasPrice();
                                    this.web3.eth.sendTransaction({
                                        from: userAddress,
                                        to: migratetokenContractAddress,
                                        //value: this.web3.utils.toHex(this.ethBridgeFee) ,
                                        gasPrice: gasPrice,
                                        data: migratetokeninstance.methods.migratetoken(EthcontractAddressV1, data.amount).encodeABI()
                                        // from: userAddress,
                                        // //to: bridgeBaseContractAddress,
                                        // to: EthcontractAddress,
                                        // gasPrice: gasPrice,
                                        // //value: 0x0,
                                        // value: parseFloat(this.userform.controls.from.value) * 1000000000000000000,
                                        // data: instance.methods.swap(data.amount).encodeABI()
                                    }).then((res) => {
                                        // console.log("swap response  == ", res);
                                        let transactionHash = res.transactionHash;
                                        // console.log("your swap transaction hash is = ", transactionHash);
                                        this.swapservice.ethSwap(transactionHash).subscribe((result) => {
                                            // console.log('final eth response = ',result);
                                            this.check_get_Balance();
                                            this.toster.success(result.message);
                                            this.loading = false;
                                            //For Clear both Input Type boxes
                                            this.userform.patchValue({
                                                from: 0
                                            });
                                            this.userform.patchValue({
                                                to: 0
                                            });
                                        });
                                    }).catch((err) => {
                                        this.toster.error(err.message);
                                        this.loading = false;
                                    });
                                    setTimeout(() => {
                                        this.swapservice.getTransactionByAddress(this.walletConnectUserAddress).subscribe((success) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                            let transactionHashApprove = success["result"][0];
                                            let time = parseInt(transactionHashApprove === null || transactionHashApprove === void 0 ? void 0 : transactionHashApprove.timeStamp);
                                            //if (new Date((time + 100) * 1000) > new Date()) {
                                            // console.log("swap response  == ", transactionHashApprove.hash);
                                            let transactionHash = transactionHashApprove === null || transactionHashApprove === void 0 ? void 0 : transactionHashApprove.hash;
                                            this.transactionHashAfterTrans = transactionHash;
                                            let button = document.getElementById("trbutton");
                                            button.click();
                                            // console.log("your swap transaction hash is = ", transactionHash);
                                            this.swapservice.ethSwap(transactionHash).subscribe((result) => {
                                                // console.log('final eth response = ',result);
                                                this.check_get_Balance();
                                                this.toster.success(result.message);
                                                this.loading = false;
                                                //For Clear both Input Type boxes
                                                this.userform.patchValue({
                                                    from: 0
                                                });
                                                this.userform.patchValue({
                                                    to: 0
                                                });
                                            });
                                            //}
                                        }), (error) => {
                                            this.toster.error("Something went wrong");
                                            this.loading = false;
                                        });
                                    }, 60 * 1000);
                                }
                                else {
                                    this.toster.error("Something went wrong");
                                    this.loading = false;
                                }
                            }), (error) => {
                                this.toster.error("Something went wrong");
                                this.loading = false;
                            });
                        }
                    }, 50 * 1000);
                }
                else {
                    this.toster.error("Connect to " + this.isSelected + " Network");
                }
            }
            else {
                this.toster.info("Enter Value");
            }
        });
    }
    connectMetamask() {
        if (this.isDeviceMobile) {
            this.metamask.disconnectAllWallet();
            // this.walletProvider();
            this.metamask.connectWalletHandler();
        }
        // else if (localStorage.getItem('walletconnect')){
        //   this.walletProvider();
        // }
        else {
            this.metamask.initMetaMask();
        }
    }
    getMaxValue() {
        var _a;
        if (((_a = window.ethereum) === null || _a === void 0 ? void 0 : _a.networkVersion) == "1") {
            if (sessionStorage.getItem('v1v2Balance')) {
                let a = sessionStorage.getItem('v1v2Balance');
                let v1v2Bal = a / Math.pow(10, 18);
                let walletBal = v1v2Bal.toString().split(".")[0];
                this.userform.patchValue({
                    from: walletBal
                });
            }
            else if (sessionStorage.getItem('ETH_trustWallet_balance')) {
                let a = sessionStorage.getItem('ETH_trustWallet_balance');
                let v1v2Bal = a / Math.pow(10, 18);
                let walletBal = v1v2Bal.toString().split(".")[0];
                this.userform.patchValue({
                    from: walletBal
                });
            }
        }
    }
    walletProvider() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.headerService.connectWalletFromDashboard.next(null);
            const provider = new _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4__["default"]({
                infuraId: _config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].infuraId,
                qrcodeModalOptions: {
                // mobileLinks: [
                //   "metamask",
                //   "trust",
                // ],
                },
            });
            yield provider.enable();
            this.web3 = new web3__WEBPACK_IMPORTED_MODULE_3___default.a(provider);
            const accounts = yield this.web3.eth.getAccounts();
            if (accounts[0]) {
                // this.metaMaskConnected = true;
                // this.accountAddress = accounts[0];
                sessionStorage.setItem('account', accounts[0]);
                sessionStorage.setItem('chainId', provider.chainId);
                sessionStorage.setItem('account_ETH_trustWallet', accounts[0]);
                // this.connectStatus = true;
                if (!localStorage.getItem('walletConnected')) {
                    localStorage.setItem('walletConnected', 'success');
                    location.reload();
                }
            }
            ;
            provider.on("disconnect", (code, reason) => {
                // console.log(code, reason);
                sessionStorage.removeItem('account');
                sessionStorage.removeItem('chainId');
                sessionStorage.removeItem('account_ETH_trustWallet');
                if (code == 1000) {
                    // this.headerService.web3Instance.next(false);
                    // this.metaMaskConnected = false;
                    sessionStorage.removeItem('account');
                    localStorage.removeItem('walletConnected');
                    location.reload();
                    // this.connectStatus = false;
                }
            });
            // this.headerService.web3Instance.next(true);
            provider.on('accountsChanged', (accounts) => {
                // this.accountAddress = accounts[0];
                sessionStorage.setItem('account', accounts[0]);
                localStorage.setItem('walletConnected', 'success');
                // this.connectStatus = true;
                location.reload();
            });
            provider.on('networkChanged', (network) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                location.reload();
                // this.connectStatus = true;
            }));
            provider.on('onConnect', (network) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                location.reload();
                // this.connectStatus = true;
            }));
        });
    }
}
SwapV1V2Component.ɵfac = function SwapV1V2Component_Factory(t) { return new (t || SwapV1V2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_metamask_service__WEBPACK_IMPORTED_MODULE_6__["MetamaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__["DeviceDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_swapv1v2_service__WEBPACK_IMPORTED_MODULE_9__["SwapV1V2Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"])); };
SwapV1V2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SwapV1V2Component, selectors: [["app-swapv1v2"]], decls: 120, vars: 11, consts: [[1, "kishu-section", "ptPad", "mt-5"], [1, "container"], [1, "row", "d-flex", "align-items-center"], [1, "col-lg-7"], [1, "mt-3"], ["href", "https://t.me/originalcatoshi", "target", "_blank"], [1, "col-lg-5"], [1, "bg-image"], ["action", "", 3, "formGroup"], [1, "kishu-swap-section"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-6", "col-6"], [1, "catoshi-content"], [1, "col-lg-6", "col-md-6", "col-6", "d-flex", "justify-content-end"], ["id", "myModal", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], [1, "mt-2"], [1, "far", "fa-question-circle"], ["type", "button", 1, "btn"], ["type", "text", "value", "1.00%", "placeholder", "1.00%", 1, "minute-group"], [1, "d-flex", "align-items-center", "mt-3"], [1, ""], ["type", "text", "value", "6", "placeholder", "6", 1, "minute-group"], [1, "minute-section", "ml-3"], [1, "interface-section", "mt-3"], [1, "mt-2", "d-flex", "align-items-center", "justify-content-between"], [1, "expert-toggle"], [1, "switch"], ["type", "checkbox"], [1, "slider", "round"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "form-kishu-group-section", "mt-2"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "2%"], [1, "btn", "btn-outline", "btn", "mr-2", 2, "padding", "0px 20px !important", 3, "click"], [1, "col-lg-6"], [1, "form-group", "m-0"], ["type", "text", "formControlName", "from", "id", "inputEmail4", "placeholder", "0", "ng-reflect-name", "from", "appOnlynumber", "", 1, "form-control", "ng-pristine", "ng-invalid", "ng-touched", 3, "ngModelChange"], ["bindLabel", "name", "bindValue", "name", "formControlName", "FromCrypto", 3, "items", "clearable"], ["ng-label-tmp", ""], [1, "exchange-section"], [1, "down-arrow", "text-center"], [1, "fas", "fa-arrow-down"], [1, "form-kishu-group-section"], ["type", "text", "formControlName", "to", "id", "inputEmail4", "placeholder", "0", "ng-reflect-name", "from", "appOnlynumber", "", 1, "form-control", "ng-pristine", "ng-invalid", "ng-touched", 2, "border", "0px", "border-radius", "0", "background", "none", 3, "readonly"], ["bindLabel", "names", "bindValue", "names", "formControlName", "ToCrypto", 3, "items", "clearable"], [1, "swap-button", "mt-4"], [4, "ngIf"], [1, "btn", "btn-outline", "btn", "mr-2", "w-100", 3, "click"], ["id", "trbutton", "type", "button", "data-toggle", "modal", "data-target", "#exampleModal", 1, "btn", "btn-primary", 2, "display", "none"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "cus-modal", "fade", 2, "z-index", "9999"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-header", 2, "border-bottom", "1px solid lightgrey"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "text-center", "p-4"], [2, "font-size", "18px", "padding", "6px", "border", "1px solid", "font-weight", "bold"], [1, "mb-3", 2, "word-wrap", "break-word"], ["type", "button", 1, "btn", "btn-primary", 2, "width", "auto", "border-radius", "unset"], ["target", "_blank", 2, "color", "white", 3, "href"], [3, "show"], ["height", "15", "width", "15", 1, "ml-2", 3, "src"], [1, "ml-2"]], template: function SwapV1V2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " V1 token swap");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " During testing for The Crossing Multi-Chain Bridge we found a small bug in the v1 token contract. As a result we have chosen to redeploy a v2 contract with upgrades. V1 token holders can use the tool below to swap their tokens from v1 to v2 . The upgraded V2 tokens will be delivered to your wallet instantly but will not be tradable until the end of the swap period. Please visit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " https://t.me/originalcatoshi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " for full details and announcements. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Transaction Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Slippage tolerance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "0.1%");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "0.5%");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "1%");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Transaction deadline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Minute");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Interface Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Toggle Expert Mode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Disable Multihops ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SwapV1V2Component_Template_button_click_72_listener() { return ctx.getMaxValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, " Max ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SwapV1V2Component_Template_input_ngModelChange_77_listener($event) { return ctx.getFromValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "ng-select", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](80, SwapV1V2Component_ng_template_80_Template, 3, 2, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](83, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](91, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "ng-select", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](94, SwapV1V2Component_ng_template_94_Template, 3, 2, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](96, SwapV1V2Component_span_96_Template, 3, 0, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](97, SwapV1V2Component_span_97_Template, 3, 0, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SwapV1V2Component_Template_button_click_99_listener() { return ctx.swapETHOnWalletConnect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "Swap Wallet Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](101, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "h5", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, "Transaction Successful");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](113, "Transaction Hash");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "h6", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](118, "View on Ropsten Tesnet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](119, "ngx-loading", 62);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.userform);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.allCryptoList)("clearable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.allCryptoList1)("clearable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.walletConnect);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.swapEnable);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.transactionHashAfterTrans);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("href", "https://ropsten.etherscan.io/tx/", ctx.transactionHashAfterTrans, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("show", ctx.loading);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _directives_digits_only_directive__WEBPACK_IMPORTED_MODULE_12__["DigitsOnlyDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["ɵh"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ngx_loading__WEBPACK_IMPORTED_MODULE_14__["NgxLoadingComponent"]], styles: [".kishu-swap-section[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n  border-radius: 40px;\n  box-shadow: rgba(0, 0, 0, 0.01) 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 4px 8px, rgba(0, 0, 0, 0.04) 0px 16px 24px, rgba(0, 0, 0, 0.01) 0px 24px 32px;\n}\n\n.form-kishu-group-section[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 8px 17px;\n  border-radius: 15px;\n}\n\n.swap-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 17px;\n  border-radius: 30px;\n  background: #ff7841;\n  color: #fff;\n}\n\n.down-arrow[_ngcontent-%COMP%] {\n  margin: 15px 0px;\n}\n\n.modal-button-second[_ngcontent-%COMP%] {\n  background-color: none !important;\n  border: none !important;\n  padding: 0px;\n}\n\n.modal-button-second[_ngcontent-%COMP%]:hover {\n  background-color: none !important;\n}\n\n.kishu-swap-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 3px !important;\n  margin: 10px 5px !important;\n  width: 70px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: inherit;\n  border-radius: 30px;\n}\n\n.minute-group[_ngcontent-%COMP%] {\n  width: 90px;\n  border: 2px solid #ff7841;\n  border-radius: 40px;\n  padding: 4px;\n  outline: none;\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #ff7841;\n}\n\ninput[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px #ff7841;\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n\n.slider.round[_ngcontent-%COMP%] {\n  border-radius: 34px;\n}\n\n.slider.round[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n}\n\n.left-catossi[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n}\n\n@media only screen and (max-width: 991px) {\n  .kishu-swap-section[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n\n  .kishu-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcc3dhcHYxdjIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0pBQUE7QUFKSjs7QUFNQTtFQUNFLHNCQUFBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBSEo7O0FBS0E7RUFDSSxnQkFBQTtBQUZKOztBQUlBO0VBQ0EsaUNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFEQTs7QUFHQTtFQUNFLGlDQUFBO0FBQUY7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUVBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUVBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFFQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UseUJBQUE7QUFFRjs7QUFDQTtFQUNFLDJCQUFBO0FBRUY7O0FBQ0E7RUFHRSwyQkFBQTtBQUVGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRUE7O0FBQUE7RUFDRTtJQUNFLGdCQUFBO0VBR0Y7O0VBREE7SUFDRixnQkFBQTtFQUlFO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBQUYiLCJmaWxlIjoic3dhcHYxdjIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBcclxuXHJcblxyXG4gIC5raXNodS1zd2FwLXNlY3Rpb257XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxJSkgMHB4IDBweCAxcHgsIHJnYigwIDAgMCAvIDQlKSAwcHggNHB4IDhweCwgcmdiKDAgMCAwIC8gNCUpIDBweCAxNnB4IDI0cHgsIHJnYigwIDAgMCAvIDElKSAwcHggMjRweCAzMnB4O1xyXG4gIH1cclxuLmZvcm0ta2lzaHUtZ3JvdXAtc2VjdGlvbntcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogOHB4IDE3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgXHJcbn1cclxuLnN3YXAtYnV0dG9uIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZjc4NDE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uZG93bi1hcnJvd3tcclxuICAgIG1hcmdpbjogMTVweCAwcHg7XHJcbn1cclxuLm1vZGFsLWJ1dHRvbi1zZWNvbmR7XHJcbmJhY2tncm91bmQtY29sb3I6IG5vbmUgIWltcG9ydGFudDtcclxuYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcclxucGFkZGluZzogMHB4O1xyXG59XHJcbi5tb2RhbC1idXR0b24tc2Vjb25kOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4ua2lzaHUtc3dhcC1zZWN0aW9uIHB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbn1cclxuLm1vZGFsLWJvZHkgYnV0dG9ue1xyXG4gIHBhZGRpbmc6IDNweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMTBweCA1cHggIWltcG9ydGFudDtcclxuICB3aWR0aDogNzBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBpbmhlcml0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcblxyXG59XHJcbi5taW51dGUtZ3JvdXB7XHJcbndpZHRoOiA5MHB4O1xyXG5ib3JkZXI6IDJweCBzb2xpZCAjZmY3ODQxO1xyXG5ib3JkZXItcmFkaXVzOiA0MHB4O1xyXG5wYWRkaW5nOiA0cHg7XHJcbm91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5zd2l0Y2gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG59XHJcblxyXG4uc3dpdGNoIGlucHV0IHsgXHJcbiAgb3BhY2l0eTogMDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5zbGlkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG4uc2xpZGVyOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG4gIHdpZHRoOiAyNnB4O1xyXG4gIGxlZnQ6IDRweDtcclxuICBib3R0b206IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZjc4NDE7IFxyXG59XHJcblxyXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggI2ZmNzg0MTtcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxufVxyXG5cclxuXHJcbi5zbGlkZXIucm91bmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbn1cclxuXHJcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmxlZnQtY2F0b3NzaXtcclxud2lkdGg6IDIwcHg7XHJcbmhlaWdodDogMjBweDtcclxuYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpe1xyXG4gIC5raXNodS1zd2FwLXNlY3Rpb257XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIH1cclxuICAua2lzaHUtc2VjdGlvbiBoMXtcclxubWFyZ2luLXRvcDogNTBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5tb2RhbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDEwNTA7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "twiu":
/*!****************************************!*\
  !*** ./src/app/swap/swap.component.ts ***!
  \****************************************/
/*! exports provided: SwapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapComponent", function() { return SwapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "Vx+w");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "meUc");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @walletconnect/web3-provider */ "Lq9n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_metamask_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/metamask.service */ "T9tP");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-device-detector */ "9YtQ");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _swap_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./swap.service */ "5ak/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-loading */ "qC+V");















function SwapComponent_ng_template_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "b", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", item_r8.logo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r8.name);
} }
function SwapComponent_ng_template_83_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SwapComponent_ng_template_83_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const item_r9 = ctx.item; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.getFrom(item_r9.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "b", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", item_r9.logo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r9.name);
} }
function SwapComponent_ng_template_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "b", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", item_r13.logo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r13.names);
} }
function SwapComponent_ng_template_98_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SwapComponent_ng_template_98_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const item_r14 = ctx.item; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r16.getTo(item_r14.names); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "b", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", item_r14.logo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r14.names);
} }
function SwapComponent_span_100_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SwapComponent_span_100_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r18.connectMetamask(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Connect Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SwapComponent_span_101_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SwapComponent_span_101_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r20.swapBSC(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Swap BSC");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SwapComponent_span_102_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SwapComponent_span_102_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r22.swapETH(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Swap ETH");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SwapComponent_span_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Insufficient Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", true);
} }
class SwapComponent {
    constructor(metamask, deviceService, toster, 
    // private spinner: NgxSpinnerService,
    swapservice, decimalpipe) {
        this.metamask = metamask;
        this.deviceService = deviceService;
        this.toster = toster;
        this.swapservice = swapservice;
        this.decimalpipe = decimalpipe;
        this.loading = false;
        //JSON For AllCryptocurrencies List
        this.allCryptoList = [
            { id: 1, name: 'BSC', logo: 'assets/images/bsclogo.png' },
            { id: 2, name: 'ETH', logo: 'assets/images/ethlogo.png' },
        ];
        this.allCryptoList1 = [
            { id: 3, names: 'BSC', logo: 'assets/images/bsclogo.png' },
            { id: 4, names: 'ETH', logo: 'assets/images/ethlogo.png' },
        ];
        //FROM and TO 
        this.userform = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            from: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            FromCrypto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            ToCrypto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.isDeviceMobile = false;
        this.isGetWalletBal = false;
        //Form
        this.insuffBalError = false;
        this.tokenAbi = {};
        const isMobile = this.deviceService.isMobile();
        const isTablet = this.deviceService.isTablet();
        if (isMobile) {
            this.isDeviceMobile = true;
        }
        if (isTablet) {
            this.isDeviceMobile = true;
        }
    }
    ngOnInit() {
        this.isGetWalletBal = true;
        if (this.isDeviceMobile) {
            this.walletProvider();
        }
        // else if (localStorage.getItem('walletconnect')){
        //   this.walletProvider();
        // }
        else {
            this.metamask.initMetaMask();
        }
        if (typeof window.web3 !== 'undefined') {
            this.web3 = new web3__WEBPACK_IMPORTED_MODULE_3___default.a(window.web3.currentProvider);
        }
        else {
            this.web3 = new web3__WEBPACK_IMPORTED_MODULE_3___default.a.providers.HttpProvider(_config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].web3ProviderUrl);
        }
        this.get_set_Accounts();
        this.swapservice.getBSCbridgeFee().subscribe((result) => {
            // console.log(result);
            this.bscBridgeFee = result.bridgeFees;
        });
        this.swapservice.getETHbridgeFee().subscribe((result) => {
            // console.log(result);
            this.ethBridgeFee = JSON.stringify(result.bridgeFees);
        });
    }
    ngDoCheck() {
        var _a, _b, _c;
        console.log("testing of provider ", this.testprovide);
        if (((_a = this.testprovide) === null || _a === void 0 ? void 0 : _a.chainId) == "97") {
            sessionStorage.setItem('account', this.testprovide.accounts[0]);
            sessionStorage.setItem('chainId', this.testprovide.chainId);
            sessionStorage.setItem('account_ETH_trustWallet', this.testprovide.accounts[0]);
        }
        else if (((_b = this.testprovide) === null || _b === void 0 ? void 0 : _b.chainId) == "250") {
            sessionStorage.setItem('account', this.testprovide.accounts[0]);
            sessionStorage.setItem('chainId', this.testprovide.chainId);
            sessionStorage.setItem('account_ETH_trustWallet', this.testprovide.accounts[0]);
        }
        else if ((_c = this.testprovide) === null || _c === void 0 ? void 0 : _c.chainId) {
            sessionStorage.setItem('account_ETH_trustWallet_wrongNetwork', 'account_ETH_trustWallet_wrongNetwork');
        }
        else {
            sessionStorage.setItem('account_ETH_trustWallet_notConnected', 'account_ETH_trustWallet_notConnected');
        }
        this.get_set_Accounts();
        sessionStorage.setItem('swapPage', "swap");
    }
    get_set_Accounts() {
        var _a, _b, _c, _d;
        if (!this.isDeviceMobile && window.ethereum && window.ethereum._state && window.ethereum._state.accounts && window.ethereum._state.accounts.length) {
            if (window.ethereum._state.accounts[0] === undefined) {
                window.ethereum;
                this.metamask.metaMaskUpdate();
            }
            else {
                this.metamask.metaMaskUpdated();
                if (((_a = window.ethereum) === null || _a === void 0 ? void 0 : _a.networkVersion) == "97") {
                    sessionStorage.removeItem('account_ETH');
                    sessionStorage.removeItem('ethBalance');
                    sessionStorage.setItem('account_BSC', window.ethereum._state.accounts[0]);
                    sessionStorage.setItem('swapPage', "swap");
                }
                if (((_b = window.ethereum) === null || _b === void 0 ? void 0 : _b.networkVersion) == "250") {
                    sessionStorage.removeItem('account_BSC');
                    sessionStorage.removeItem('bscBalance');
                    sessionStorage.setItem('account_ETH', window.ethereum._state.accounts[0]);
                    sessionStorage.setItem('swapPage', "swap");
                }
            }
        }
        // else if(localStorage.getItem('-walletlink:https://www.walletlink.org:Addresses')){
        // }
        // else if(localStorage.getItem('walletconnect')){
        // }
        else {
            if (this.isDeviceMobile && sessionStorage.getItem('account')) {
            }
            else {
                sessionStorage.clear();
                // this.metamask.checkMetaMaskInitial();
                // this.metamask.initMetaMask();
            }
        }
        if (((_c = window.ethereum) === null || _c === void 0 ? void 0 : _c.networkVersion) == "97" || ((_d = window.ethereum) === null || _d === void 0 ? void 0 : _d.networkVersion) == "250") {
        }
        else {
            sessionStorage.clear();
            // this.toster.warning("Please Select ETH or BSC Network")
        }
        this.check_get_Balance();
    }
    check_get_Balance() {
        // GET Wallet Balance
        if (this.isGetWalletBal) {
            if (sessionStorage.getItem('account_BSC')) {
                let bscWalletAddress = sessionStorage.getItem('account_BSC');
                // let bscWalletAddress = window.ethereum._state.accounts[0]                         
                this.swapservice.getBSCBalanace(bscWalletAddress).subscribe((result) => {
                    sessionStorage.removeItem('ethBalance');
                    sessionStorage.setItem('bscBalance', result.Tokens);
                    this.isGetWalletBal = false;
                    // this.currentWalletbalance = BigInt(result.Tokens / Math.pow(10,18))
                    // sessionStorage.setItem
                });
            }
            else if (sessionStorage.getItem('account_ETH')) {
                let ethWalletAddress = sessionStorage.getItem('account_ETH');
                // let ethWalletAddress = window.ethereum._state.accounts[0]   
                this.swapservice.getETHBalanace(ethWalletAddress).subscribe((result) => {
                    sessionStorage.removeItem('bscBalance');
                    sessionStorage.setItem('ethBalance', result.Tokens);
                    this.isGetWalletBal = false;
                });
            }
            else if (sessionStorage.getItem('chainId') == "97") {
                let bscWalletAddress = sessionStorage.getItem('account_ETH_trustWallet');
                // let bscWalletAddress = window.ethereum._state.accounts[0]                         
                this.swapservice.getBSCBalanace(bscWalletAddress).subscribe((result) => {
                    sessionStorage.removeItem('ethBalance');
                    sessionStorage.setItem('bscBalance', result.Tokens);
                    this.isGetWalletBal = false;
                });
            }
            else if (sessionStorage.getItem('chainId') == "250") {
                let ethWalletAddress = sessionStorage.getItem('account_ETH_trustWallet');
                // let ethWalletAddress = window.ethereum._state.accounts[0]   
                this.swapservice.getETHBalanace(ethWalletAddress).subscribe((result) => {
                    sessionStorage.removeItem('bscBalance');
                    sessionStorage.setItem('ethBalance', result.Tokens);
                    this.isGetWalletBal = false;
                });
            }
        }
    }
    ngAfterContentInit() {
        this.loading = true;
        setTimeout(() => {
            var _a, _b, _c;
            this.loading = false;
            if (((_a = window.ethereum) === null || _a === void 0 ? void 0 : _a.networkVersion) == "97" && sessionStorage.getItem('account_BSC')) {
                this.bscSwap = true;
                this.ethSwap = false;
                this.walletConnect = false;
                this.insuffBalError = false;
                this.userform.patchValue({
                    FromCrypto: "BSC",
                    ToCrypto: "ETH"
                });
                this.isSelected = "BSC";
            }
            else if (((_b = window.ethereum) === null || _b === void 0 ? void 0 : _b.networkVersion) == "250" && sessionStorage.getItem('account_ETH')) {
                this.bscSwap = false;
                this.ethSwap = true;
                this.walletConnect = false;
                this.insuffBalError = false;
                this.userform.patchValue({
                    FromCrypto: "ETH",
                    ToCrypto: "BSC"
                });
                this.isSelected = "ETH";
            }
            else if (!((_c = window === null || window === void 0 ? void 0 : window.ethereum) === null || _c === void 0 ? void 0 : _c.selectedAddress)) {
                this.walletConnect = true;
                this.bscSwap = false;
                this.ethSwap = false;
                this.insuffBalError = false;
                this.userform.patchValue({
                    FromCrypto: "BSC",
                    ToCrypto: "ETH"
                });
                this.isSelected = "BSC";
            }
            else {
                this.walletConnect = true;
                this.bscSwap = false;
                this.ethSwap = false;
                this.insuffBalError = false;
                this.userform.patchValue({
                    FromCrypto: "BSC",
                    ToCrypto: "ETH"
                });
                this.isSelected = "BSC";
            }
            if (this.isDeviceMobile == true) {
                if (sessionStorage.getItem('chainId') == '97') {
                    this.bscSwap = true;
                    this.walletConnect = false;
                    this.ethSwap = false;
                    this.insuffBalError = false;
                }
                else if (sessionStorage.getItem('chainId') == "250") {
                    this.bscSwap = false;
                    this.walletConnect = false;
                    this.ethSwap = true;
                    this.insuffBalError = false;
                }
                else {
                    this.bscSwap = false;
                    this.walletConnect = true;
                    this.ethSwap = false;
                    this.insuffBalError = false;
                }
            }
        }, 2000);
    }
    getFromValue(value) {
        if (value == 0 || value == "") {
            this.toster.info("Enter Value");
            this.userform.patchValue({
                to: ""
            });
        }
        // else{
        if (this.isSelected == "BSC") {
            // for BSC
            let fromVal = BigInt(value * Math.pow(10, 18));
            this.loading = true;
            this.userform.patchValue({
                to: "0"
            });
            this.swapservice.bscToEthConvert(fromVal).subscribe((result) => {
                this.userform.patchValue({
                    to: this.decimalpipe.transform(result / Math.pow(10, 18), '1.2-2')
                });
                this.loading = false;
            });
        }
        else {
            // for ETH
            let fromVal = BigInt(value * Math.pow(10, 18));
            this.loading = true;
            this.userform.patchValue({
                to: "0"
            });
            this.swapservice.ethToBscConvert(fromVal).subscribe((result) => {
                // console.log("ETH TO BSC =  ", result / Math.pow(10, 18));
                this.userform.patchValue({
                    to: this.decimalpipe.transform(result / Math.pow(10, 18), '1.2-2')
                });
                this.loading = false;
            });
        }
        if (sessionStorage.getItem('account_BSC')) {
            let fromVal = BigInt(value + '000000000000000000');
            this.currentWalletBalance = sessionStorage.getItem('bscBalance');
            if (fromVal <= this.currentWalletBalance) {
                this.insuffBalError = false;
                this.walletConnect = false;
                this.bscSwap = true;
                this.ethSwap = false;
            }
            else {
                this.insuffBalError = true;
                this.walletConnect = false;
                this.bscSwap = false;
                this.ethSwap = false;
            }
        }
        else if (sessionStorage.getItem('account_ETH')) {
            let fromVal = BigInt(value + '000000000000000000');
            this.currentWalletBalance = sessionStorage.getItem('ethBalance');
            if (fromVal <= this.currentWalletBalance) {
                this.insuffBalError = false;
                this.walletConnect = false;
                this.bscSwap = false;
                this.ethSwap = true;
            }
            else {
                this.insuffBalError = true;
                this.walletConnect = false;
                this.bscSwap = false;
                this.ethSwap = false;
            }
        }
        // }
    }
    getFrom(value) {
        if (value == "BSC") {
            this.isSelected = "BSC";
            this.userform.patchValue({
                FromCrypto: "BSC"
            });
            this.userform.patchValue({
                ToCrypto: "ETH"
            });
            this.getFromValue(this.userform.controls.from.value);
        }
        else {
            this.isSelected = "ETH";
            this.userform.patchValue({
                FromCrypto: "ETH"
            });
            this.userform.patchValue({
                ToCrypto: "BSC"
            });
            this.getFromValue(this.userform.controls.from.value);
        }
        // console.log("You have selected =" , this.isSelected);
    }
    getTo(value) {
        if (value == "BSC") {
            this.userform.patchValue({
                FromCrypto: "ETH"
            });
            this.userform.patchValue({
                ToCrypto: "BSC"
            });
        }
        else {
            this.userform.patchValue({
                FromCrypto: "BSC"
            });
            this.userform.patchValue({
                ToCrypto: "ETH"
            });
        }
    }
    swapBSC() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.userform.controls.from.value) {
                if (sessionStorage.getItem('account_BSC') && this.isSelected == "BSC") {
                    // alert("swap bsc .............");
                    let fromVal = BigInt(this.userform.value.from + '000000000000000000');
                    this.toster.warning('Please don\'t refresh, transaction is processing.');
                    this.loading = true;
                    this.tokenAbi = {};
                    this.tokenAbi = _config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].tokenAbiBSC;
                    let bscContractAddress = _config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].contractAddressBSC;
                    let userAddress = sessionStorage.getItem('account_BSC');
                    const data = {
                        // amount : BigInt(this.userform.controls.from.value * Math.pow(10,18)),
                        amount: BigInt(this.userform.controls.from.value + '000000000000000000'),
                    };
                    let instance = new this.web3.eth.Contract(this.tokenAbi, bscContractAddress);
                    const gasPrice = yield this.web3.eth.getGasPrice();
                    this.web3.eth.sendTransaction({
                        from: userAddress,
                        to: bscContractAddress,
                        value: this.web3.utils.toHex(this.bscBridgeFee),
                        gasPrice: gasPrice,
                        data: instance.methods.swap(data.amount).encodeABI()
                    }).then((res) => {
                        // console.log("swap response  == "  , res);
                        let transactionHash = res.transactionHash;
                        // console.log("your transaction hash is = " , transactionHash);
                        this.swapservice.bscSwap(transactionHash).subscribe((result) => {
                            // console.log("swap result = " , result);
                            this.isGetWalletBal = true;
                            this.check_get_Balance();
                            this.toster.success(result.message);
                            this.loading = false;
                            //For Clear both Input Type boxes
                            this.userform.patchValue({
                                from: 0
                            });
                            this.userform.patchValue({
                                to: 0
                            });
                        });
                    }).catch((err) => {
                        this.toster.error(err.message);
                        this.loading = false;
                    });
                }
                else {
                    this.toster.error("Connect to " + this.isSelected + " Network");
                }
            }
            else {
                this.toster.info("Enter Value");
            }
        });
    }
    swapETH() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.userform.controls.from.value) {
                if (sessionStorage.getItem('account_ETH') && this.isSelected == "ETH") {
                    let fromVal = BigInt(this.userform.value.from + '000000000000000000');
                    this.loading = true;
                    this.toster.warning('Please don\'t refresh, transaction is processing.');
                    this.tokenAbi = {};
                    this.tokenAbi = _config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].tokenAbiETH;
                    let ethContractAddress = _config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].contractAddressETH;
                    let userAddress = sessionStorage.getItem('account_ETH');
                    const data = {
                        // amount: BigInt(this.userform.controls.from.value * Math.pow(10, 18)),
                        amount: BigInt(this.userform.controls.from.value + '000000000000000000'),
                    };
                    let instance = new this.web3.eth.Contract(this.tokenAbi, ethContractAddress);
                    const gasPrice = yield this.web3.eth.getGasPrice();
                    this.web3.eth.sendTransaction({
                        from: userAddress,
                        to: ethContractAddress,
                        value: this.web3.utils.toHex(this.ethBridgeFee),
                        gasPrice: gasPrice,
                        data: instance.methods.swap(data.amount).encodeABI()
                    }).then((res) => {
                        // console.log("swap response  == ", res);
                        let transactionHash = res.transactionHash;
                        // console.log("your swap transaction hash is = ", transactionHash);
                        this.swapservice.ethSwap(transactionHash).subscribe((result) => {
                            // console.log('final eth response = ',result);
                            this.isGetWalletBal = true;
                            this.check_get_Balance();
                            this.toster.success(result.message);
                            this.loading = false;
                            //For Clear both Input Type boxes
                            this.userform.patchValue({
                                from: 0
                            });
                            this.userform.patchValue({
                                to: 0
                            });
                        });
                    }).catch((err) => {
                        this.toster.error(err.message);
                        this.loading = false;
                    });
                }
                else {
                    this.toster.error("Connect to " + this.isSelected + " Network");
                }
            }
            else {
                this.toster.info("Enter Value");
            }
        });
    }
    connectMetamask() {
        // this.isDeviceMobile=true
        if (this.isDeviceMobile) {
            this.walletProvider();
        }
        // else if (localStorage.getItem('walletconnect')){
        //   this.walletProvider();
        // }
        else {
            this.metamask.initMetaMask();
        }
    }
    walletProvider() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.headerService.connectWalletFromDashboard.next(null);
            const provider = new _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4__["default"]({
                infuraId: _config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].infuraId,
                qrcodeModalOptions: {
                    mobileLinks: [
                        "metamask",
                        "trust",
                    ],
                },
            });
            yield provider.enable();
            this.testprovide = provider;
            this.web3 = new web3__WEBPACK_IMPORTED_MODULE_3___default.a(provider);
            const accounts = yield this.web3.eth.getAccounts();
            if (accounts[0]) {
                if (provider.chainId == "97") {
                    sessionStorage.setItem('account', accounts[0]);
                    sessionStorage.setItem('chainId', provider.chainId);
                    sessionStorage.setItem('account_ETH_trustWallet', accounts[0]);
                }
                else if (provider.chainId == "250") {
                    sessionStorage.setItem('account', accounts[0]);
                    sessionStorage.setItem('chainId', provider.chainId);
                    sessionStorage.setItem('account_ETH_trustWallet', accounts[0]);
                }
                else if (provider.chainId) {
                    sessionStorage.setItem('account_ETH_trustWallet_wrongNetwork', 'account_ETH_trustWallet_wrongNetwork');
                }
                else {
                    sessionStorage.setItem('account_ETH_trustWallet_notConnected', 'account_ETH_trustWallet_notConnected');
                }
                // this.connectStatus = true;
                if (!localStorage.getItem('walletConnected')) {
                    localStorage.setItem('walletConnected', 'success');
                    location.reload();
                }
            }
            ;
            provider.on("disconnect", (code, reason) => {
                // console.log(code, reason);
                sessionStorage.removeItem('account');
                sessionStorage.removeItem('chainId');
                sessionStorage.removeItem('account_ETH_trustWallet');
                sessionStorage.removeItem('account_ETH_trustWallet_notConnected');
                sessionStorage.removeItem('account_ETH_trustWallet_wrongNetwork');
                if (code == 1000) {
                    // this.headerService.web3Instance.next(false);
                    // this.metaMaskConnected = false;
                    sessionStorage.removeItem('account');
                    localStorage.removeItem('walletConnected');
                    location.reload();
                    // this.connectStatus = false;
                }
            });
            // this.headerService.web3Instance.next(true);
            provider.on('accountsChanged', (accounts) => {
                // this.accountAddress = accounts[0];
                sessionStorage.setItem('account', accounts[0]);
                localStorage.setItem('walletConnected', 'success');
                // this.connectStatus = true;
                location.reload();
            });
            provider.on('networkChanged', (network) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                location.reload();
                // this.connectStatus = true;
            }));
            provider.on('onConnect', (network) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                location.reload();
                // this.connectStatus = true;
            }));
        });
    }
    getMaxValue() {
        var _a, _b;
        // if(window.ethereum?.networkVersion == "97" || window.ethereum?.networkVersion == "120"){
        if (((_a = window.ethereum) === null || _a === void 0 ? void 0 : _a.networkVersion) == "97") {
            let a = sessionStorage.getItem('bscBalance');
            let bscBalance = a / Math.pow(10, 18);
            let walletBal = bscBalance.toString().split(".")[0];
            this.userform.patchValue({
                from: walletBal
            });
        }
        else if (((_b = window.ethereum) === null || _b === void 0 ? void 0 : _b.networkVersion) == "250") {
            let a = sessionStorage.getItem('ethBalance');
            let ethBalance = a / Math.pow(10, 18);
            let walletBal = ethBalance.toString().split(".")[0];
            this.userform.patchValue({
                from: walletBal
            });
            // }
        }
    }
}
SwapComponent.ɵfac = function SwapComponent_Factory(t) { return new (t || SwapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_metamask_service__WEBPACK_IMPORTED_MODULE_6__["MetamaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__["DeviceDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_swap_service__WEBPACK_IMPORTED_MODULE_9__["SwapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"])); };
SwapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SwapComponent, selectors: [["app-swap"]], decls: 105, vars: 10, consts: [[1, "kishu-section", "ptPad", "mt-5"], [1, "container"], [1, "row", "d-flex", "align-items-center"], [1, "col-lg-7"], [1, "mt-3"], [1, "mt-4"], [1, "col-lg-5"], [1, "bg-image"], ["action", "", 3, "formGroup"], [1, "kishu-swap-section"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-6", "col-6"], [1, "catoshi-content"], [1, "ml-2"], ["src", "assets/images/d.png", 1, "mr-1", "left-catossi"], [1, "col-lg-6", "col-md-6", "col-6", "d-flex", "justify-content-end"], ["id", "myModal", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], [1, "mt-2"], [1, "far", "fa-question-circle"], ["type", "button", 1, "btn"], ["type", "text", "value", "1.00%", "placeholder", "1.00%", 1, "minute-group"], [1, "d-flex", "align-items-center", "mt-3"], [1, ""], ["type", "text", "value", "6", "placeholder", "6", 1, "minute-group"], [1, "minute-section", "ml-3"], [1, "interface-section", "mt-3"], [1, "mt-2", "d-flex", "align-items-center", "justify-content-between"], [1, "expert-toggle"], [1, "switch"], ["type", "checkbox"], [1, "slider", "round"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "form-kishu-group-section", "mt-2"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "2%"], [1, "btn", "btn-outline", "btn", "mr-2", 2, "padding", "0px 20px !important", 3, "click"], [1, "col-lg-6"], [1, "form-group", "m-0"], ["type", "text", "formControlName", "from", "id", "inputEmail4", "placeholder", "0", "ng-reflect-name", "from", 1, "form-control", "ng-pristine", "ng-invalid", "ng-touched", 3, "ngModelChange"], ["bindLabel", "name", "bindValue", "name", "formControlName", "FromCrypto", 3, "items", "clearable"], ["ng-label-tmp", ""], ["ng-option-tmp", ""], [1, "exchange-section"], [1, "down-arrow", "text-center"], [1, "fas", "fa-arrow-down"], [1, "form-kishu-group-section"], ["type", "text", "formControlName", "to", "id", "inputEmail4", "placeholder", "0", "ng-reflect-name", "from", 1, "form-control", "ng-pristine", "ng-invalid", "ng-touched"], ["bindLabel", "names", "bindValue", "names", "formControlName", "ToCrypto", 3, "items", "clearable"], [1, "swap-button", "mt-4"], [4, "ngIf"], [3, "show"], ["height", "15", "width", "15", 1, "ml-2", 3, "src"], [3, "click"], [1, "btn", "btn-outline", "btn", "mr-2", "w-100", 3, "click"], [1, "btn", "btn-outline", "btn", "mr-2", "w-100", 3, "disabled"]], template: function SwapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Czatoshi Bridge");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Czatoshi Bridge is a bridge service providing access to inter-blockchain liquidity for Binance Smart Chain and Ethereum Chain decentralized applications, and allow user to exchange Czatoshi token from one chain to other. A fixed network fee will be charged according to different networks. The amount differs within different blockchains. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "User can easily bridge by connecting to their metamask wallets and filling the amount the want to swap. Once process is complete funds will be deposited in users wallet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "b", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "CZATOSHI");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Transaction Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Slippage tolerance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "0.1%");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "0.5%");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "1%");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Transaction deadline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Minute");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Interface Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Toggle Expert Mode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](58, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Disable Multihops ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SwapComponent_Template_button_click_74_listener() { return ctx.getMaxValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, " Max ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SwapComponent_Template_input_ngModelChange_79_listener($event) { return ctx.getFromValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "ng-select", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](82, SwapComponent_ng_template_82_Template, 3, 2, "ng-template", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](83, SwapComponent_ng_template_83_Template, 4, 2, "ng-template", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](86, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](94, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "ng-select", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](97, SwapComponent_ng_template_97_Template, 3, 2, "ng-template", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](98, SwapComponent_ng_template_98_Template, 4, 2, "ng-template", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](100, SwapComponent_span_100_Template, 3, 0, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](101, SwapComponent_span_101_Template, 3, 0, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](102, SwapComponent_span_102_Template, 3, 0, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](103, SwapComponent_span_103_Template, 3, 1, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](104, "ngx-loading", 52);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.userform);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.allCryptoList)("clearable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.allCryptoList1)("clearable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.walletConnect);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.bscSwap);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.ethSwap);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.insuffBalError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("show", ctx.loading);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["ɵh"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["ɵf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingComponent"]], styles: [".kishu-swap-section[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n  border-radius: 40px;\n  box-shadow: rgba(0, 0, 0, 0.01) 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 4px 8px, rgba(0, 0, 0, 0.04) 0px 16px 24px, rgba(0, 0, 0, 0.01) 0px 24px 32px;\n}\n\n.form-kishu-group-section[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 8px 17px;\n  border-radius: 15px;\n}\n\n.swap-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 17px;\n  border-radius: 30px;\n  background: #ff7841;\n  color: #fff;\n}\n\n.down-arrow[_ngcontent-%COMP%] {\n  margin: 15px 0px;\n}\n\n.modal-button-second[_ngcontent-%COMP%] {\n  background-color: none !important;\n  border: none !important;\n  padding: 0px;\n}\n\n.modal-button-second[_ngcontent-%COMP%]:hover {\n  background-color: none !important;\n}\n\n.kishu-swap-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 3px !important;\n  margin: 10px 5px !important;\n  width: 70px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: inherit;\n  border-radius: 30px;\n}\n\n.minute-group[_ngcontent-%COMP%] {\n  width: 90px;\n  border: 2px solid #ff7841;\n  border-radius: 40px;\n  padding: 4px;\n  outline: none;\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #ff7841;\n}\n\ninput[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px #ff7841;\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n\n.slider.round[_ngcontent-%COMP%] {\n  border-radius: 34px;\n}\n\n.slider.round[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n}\n\n.left-catossi[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n}\n\n@media only screen and (max-width: 991px) {\n  .kishu-swap-section[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    margin-bottom: 50px;\n  }\n\n  .kishu-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcc3dhcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrSkFBQTtBQUpKOztBQU1BO0VBQ0Usc0JBQUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFISjs7QUFLQTtFQUNJLGdCQUFBO0FBRko7O0FBSUE7RUFDQSxpQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQURBOztBQUdBO0VBQ0UsaUNBQUE7QUFBRjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0UsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBRUEsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUVBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSx5QkFBQTtBQUVGOztBQUNBO0VBQ0UsMkJBQUE7QUFFRjs7QUFDQTtFQUdFLDJCQUFBO0FBRUY7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFFQTs7QUFBQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtFQUdGOztFQURBO0lBQ0YsZ0JBQUE7RUFJRTtBQUNGIiwiZmlsZSI6InN3YXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBcclxuXHJcblxyXG4gIC5raXNodS1zd2FwLXNlY3Rpb257XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxJSkgMHB4IDBweCAxcHgsIHJnYigwIDAgMCAvIDQlKSAwcHggNHB4IDhweCwgcmdiKDAgMCAwIC8gNCUpIDBweCAxNnB4IDI0cHgsIHJnYigwIDAgMCAvIDElKSAwcHggMjRweCAzMnB4O1xyXG4gIH1cclxuLmZvcm0ta2lzaHUtZ3JvdXAtc2VjdGlvbntcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogOHB4IDE3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgXHJcbn1cclxuLnN3YXAtYnV0dG9uIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZjc4NDE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uZG93bi1hcnJvd3tcclxuICAgIG1hcmdpbjogMTVweCAwcHg7XHJcbn1cclxuLm1vZGFsLWJ1dHRvbi1zZWNvbmR7XHJcbmJhY2tncm91bmQtY29sb3I6IG5vbmUgIWltcG9ydGFudDtcclxuYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcclxucGFkZGluZzogMHB4O1xyXG59XHJcbi5tb2RhbC1idXR0b24tc2Vjb25kOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4ua2lzaHUtc3dhcC1zZWN0aW9uIHB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbn1cclxuLm1vZGFsLWJvZHkgYnV0dG9ue1xyXG4gIHBhZGRpbmc6IDNweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMTBweCA1cHggIWltcG9ydGFudDtcclxuICB3aWR0aDogNzBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBpbmhlcml0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcblxyXG59XHJcbi5taW51dGUtZ3JvdXB7XHJcbndpZHRoOiA5MHB4O1xyXG5ib3JkZXI6IDJweCBzb2xpZCAjZmY3ODQxO1xyXG5ib3JkZXItcmFkaXVzOiA0MHB4O1xyXG5wYWRkaW5nOiA0cHg7XHJcbm91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5zd2l0Y2gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG59XHJcblxyXG4uc3dpdGNoIGlucHV0IHsgXHJcbiAgb3BhY2l0eTogMDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5zbGlkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG4uc2xpZGVyOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG4gIHdpZHRoOiAyNnB4O1xyXG4gIGxlZnQ6IDRweDtcclxuICBib3R0b206IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZjc4NDE7IFxyXG59XHJcblxyXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggI2ZmNzg0MTtcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxufVxyXG5cclxuXHJcbi5zbGlkZXIucm91bmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbn1cclxuXHJcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmxlZnQtY2F0b3NzaXtcclxud2lkdGg6IDIwcHg7XHJcbmhlaWdodDogMjBweDtcclxuYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpe1xyXG4gIC5raXNodS1zd2FwLXNlY3Rpb257XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcbiAgLmtpc2h1LXNlY3Rpb24gaDF7XHJcbm1hcmdpbi10b3A6IDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_swap_swap_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/swap/swap.component */ "twiu");
/* harmony import */ var _app_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/header/header.component */ "fECr");
/* harmony import */ var _app_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _swapv1v2_swapv1v2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./swapv1v2/swapv1v2.component */ "rj6r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '',
        component: _app_swap_swap_component__WEBPACK_IMPORTED_MODULE_1__["SwapComponent"]
    },
    // {
    //   path : 'swap',
    //   component : SwapComponent
    // },
    {
        path: 'swap',
        component: _swapv1v2_swapv1v2_component__WEBPACK_IMPORTED_MODULE_4__["SwapV1V2Component"]
    },
    {
        path: 'header',
        component: _app_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]
    },
    {
        path: '**',
        component: _app_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map