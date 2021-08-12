import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import { MetamaskService } from '../services/metamask.service';
import { DeviceDetectorService } from 'ngx-device-detector';
// import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { SwapService } from './swap.service';
import { appConfig } from '../config';
import Web3 from 'web3';
import WalletConnectProvider from '@walletconnect/web3-provider';


declare let window: any;
@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.scss']
})
export class SwapComponent implements OnInit {
  public loading = false;
  //JSON For AllCryptocurrencies List
  allCryptoList = [
    { id: 1, name: 'BSC', logo: 'assets/images/bsclogo.png' },
    { id: 2, name: 'ETH', logo: 'assets/images/ethlogo.png' },
  ];
  allCryptoList1 = [
    { id: 3, names: 'BSC', logo: 'assets/images/bsclogo.png' },
    { id: 4, names: 'ETH', logo: 'assets/images/ethlogo.png' },
  ];

  //FROM and TO 
   userform = new FormGroup({
    from: new FormControl('', [Validators.required]),
    to: new FormControl(''),
    FromCrypto: new FormControl(''),
    ToCrypto: new FormControl(''),
    });
  constructor(private metamask:MetamaskService,
    private deviceService: DeviceDetectorService,
    private toster:ToastrService,
    // private spinner: NgxSpinnerService,
    private swapservice:SwapService,
    private decimalpipe : DecimalPipe) {
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    if (isMobile) {  this.isDeviceMobile = true;  }
    if (isTablet) {  this.isDeviceMobile = true;  }
   }

  isDeviceMobile=false;
  token:any;
  web3: any;
  bscSwap:any;
  ethSwap:any;
  walletConnect:any;
  tempWeb3_eth:any;
  tempWeb3_bsc:any;
  bscBridgeFee:any;
  ethBridgeFee:any;
  isGetWalletBal=false;
  ngOnInit(): void {   
      this.isGetWalletBal=true;
    
      if(this.isDeviceMobile){
        this.walletProvider();
      }
      // else if (localStorage.getItem('walletconnect')){
      //   this.walletProvider();
      // }
      else{      
        this.metamask.initMetaMask();
      }

    if (typeof window.web3 !== 'undefined') {
      this.web3 = new Web3(window.web3.currentProvider);
    } else {
      this.web3 = new Web3.providers.HttpProvider(appConfig.web3ProviderUrl);
    }
    
    this.get_set_Accounts()
    

    this.swapservice.getBSCbridgeFee().subscribe((result:any)=>{
      // console.log(result);
      this.bscBridgeFee = result.bridgeFees
    })

    this.swapservice.getETHbridgeFee().subscribe((result:any)=>{
      // console.log(result);
      this.ethBridgeFee =JSON.stringify( result.bridgeFees)
    })
    }

    

  ngDoCheck() {
    console.log("testing of provider " , this.testprovide)
    if(this.testprovide?.chainId == "97"){
      sessionStorage.setItem('account', this.testprovide.accounts[0]);
      sessionStorage.setItem('chainId', this.testprovide.chainId)
      sessionStorage.setItem('account_ETH_trustWallet', this.testprovide.accounts[0]);
    } else if(this.testprovide?.chainId == "250"){
      sessionStorage.setItem('account', this.testprovide.accounts[0]);
      sessionStorage.setItem('chainId', this.testprovide.chainId)
      sessionStorage.setItem('account_ETH_trustWallet', this.testprovide.accounts[0]);
    } else if(this.testprovide?.chainId){
      sessionStorage.setItem('account_ETH_trustWallet_wrongNetwork' , 'account_ETH_trustWallet_wrongNetwork')
    } else{
      sessionStorage.setItem('account_ETH_trustWallet_notConnected' , 'account_ETH_trustWallet_notConnected')
    }

   this.get_set_Accounts();
   sessionStorage.setItem('swapPage' , "swap")
  }

  get_set_Accounts(){
    if (!this.isDeviceMobile && window.ethereum && window.ethereum._state && window.ethereum._state.accounts && window.ethereum._state.accounts.length) {
      if (window.ethereum._state.accounts[0] === undefined) { window.ethereum
        this.metamask.metaMaskUpdate();
      } else {
        this.metamask.metaMaskUpdated();
        if(window.ethereum?.networkVersion == "97"){
          sessionStorage.removeItem('account_ETH');
          sessionStorage.removeItem('ethBalance');
          sessionStorage.setItem('account_BSC', window.ethereum._state.accounts[0]);
          sessionStorage.setItem('swapPage' , "swap")

        }
        
         if(window.ethereum?.networkVersion == "250"){
          sessionStorage.removeItem('account_BSC');
          sessionStorage.removeItem('bscBalance');
          sessionStorage.setItem('account_ETH', window.ethereum._state.accounts[0]);
          sessionStorage.setItem('swapPage' , "swap")

          } 
      }
    } 
    // else if(localStorage.getItem('-walletlink:https://www.walletlink.org:Addresses')){
    // }
    // else if(localStorage.getItem('walletconnect')){
    // }
    else  {
      if (this.isDeviceMobile && sessionStorage.getItem('account')){
        
    }else{
      sessionStorage.clear();
      // this.metamask.checkMetaMaskInitial();
      // this.metamask.initMetaMask();
    }
  }
 
  if(window.ethereum?.networkVersion == "97" || window.ethereum?.networkVersion == "250"){
  } else{
    sessionStorage.clear();
    // this.toster.warning("Please Select ETH or BSC Network")
  }

  this.check_get_Balance()
  }



  
    check_get_Balance(){  
    // GET Wallet Balance
    if(this.isGetWalletBal){
    if(sessionStorage.getItem('account_BSC')){
      let bscWalletAddress = sessionStorage.getItem('account_BSC');  
      // let bscWalletAddress = window.ethereum._state.accounts[0]                         
      this.swapservice.getBSCBalanace(bscWalletAddress).subscribe((result: any) => {   //GET BSC BALANCE
        sessionStorage.removeItem('ethBalance')
        sessionStorage.setItem('bscBalance', result.Tokens);
        this.isGetWalletBal=false;
        // this.currentWalletbalance = BigInt(result.Tokens / Math.pow(10,18))
        // sessionStorage.setItem
      })
    } else if(sessionStorage.getItem('account_ETH')){
      let ethWalletAddress = sessionStorage.getItem('account_ETH');
      // let ethWalletAddress = window.ethereum._state.accounts[0]   
        this.swapservice.getETHBalanace(ethWalletAddress).subscribe((result: any) => {  // GET ETH BALANCE
          sessionStorage.removeItem('bscBalance')
          sessionStorage.setItem('ethBalance', result.Tokens);
          this.isGetWalletBal=false;
        })
    } 
    else if(sessionStorage.getItem('chainId') == "97"){
      let bscWalletAddress = sessionStorage.getItem('account_ETH_trustWallet');  
      // let bscWalletAddress = window.ethereum._state.accounts[0]                         
      this.swapservice.getBSCBalanace(bscWalletAddress).subscribe((result: any) => {   //GET BSC BALANCE
        sessionStorage.removeItem('ethBalance')
        sessionStorage.setItem('bscBalance', result.Tokens);
        this.isGetWalletBal=false;
      })
    } else if(sessionStorage.getItem('chainId') == "250"){
      let ethWalletAddress = sessionStorage.getItem('account_ETH_trustWallet');
      // let ethWalletAddress = window.ethereum._state.accounts[0]   
        this.swapservice.getETHBalanace(ethWalletAddress).subscribe((result: any) => {  // GET ETH BALANCE
          sessionStorage.removeItem('bscBalance')
          sessionStorage.setItem('ethBalance', result.Tokens);
          this.isGetWalletBal=false;
        })
    }
  }
  }


  ngAfterContentInit(){  
    this.loading=true
   setTimeout(() => {
     this.loading=false
    if(window.ethereum?.networkVersion == "97" && sessionStorage.getItem('account_BSC')){
      this.bscSwap = true;
      this.ethSwap = false;
      this.walletConnect = false;
      this.insuffBalError=false;
      this.userform.patchValue({
        FromCrypto : "BSC",
        ToCrypto : "ETH"
      })
      this.isSelected="BSC";
    } else if (window.ethereum?.networkVersion == "250" && sessionStorage.getItem('account_ETH')){
      this.bscSwap = false;
      this.ethSwap = true;
      this.walletConnect = false;
      this.insuffBalError=false;
      this.userform.patchValue({
        FromCrypto : "ETH",
        ToCrypto : "BSC"
      })
      this.isSelected="ETH";
    }else if(!window?.ethereum?.selectedAddress){
      this.walletConnect = true;
      this.bscSwap=false;
      this.ethSwap=false;
      this.insuffBalError=false;
      this.userform.patchValue({
        FromCrypto : "BSC",
        ToCrypto : "ETH"
      })
      this.isSelected="BSC";
    } else {
      this.walletConnect = true;
      this.bscSwap=false;
      this.ethSwap=false;
      this.insuffBalError=false;
      this.userform.patchValue({
        FromCrypto : "BSC",
        ToCrypto : "ETH"
      })
      this.isSelected="BSC";
    }

    if(this.isDeviceMobile == true){
      if(sessionStorage.getItem('chainId') == '97'){
          this.bscSwap = true;
          this.walletConnect = false;
          this.ethSwap= false;
          this.insuffBalError=false;
        } else if(sessionStorage.getItem('chainId') == "250"){
          this.bscSwap = false;
          this.walletConnect = false;
          this.ethSwap= true;
          this.insuffBalError=false;
        } else{
          this.bscSwap = false;
          this.walletConnect = true;
          this.ethSwap= false;
          this.insuffBalError=false;
        }
    }
   }, 2000);
  }
 

  //Form
  insuffBalError=false;
  getFromValue(value:any){
    if(value == 0 || value == ""){
      this.toster.info("Enter Value");
      this.userform.patchValue({
        to:""
      })
    } 
    // else{
      if(this.isSelected == "BSC"){
        // for BSC
        let fromVal = BigInt(value * Math.pow(10, 18));
        this.loading=true;
        this.userform.patchValue({
          to: "0"
        })
        this.swapservice.bscToEthConvert(fromVal).subscribe((result: any) => {
          this.userform.patchValue({
            to: this.decimalpipe.transform(result / Math.pow(10, 18), '1.2-2')
          })
          this.loading=false;
        })
  
      } else{
        // for ETH
        let fromVal = BigInt(value * Math.pow(10, 18));
        this.loading=true;
        this.userform.patchValue({
          to: "0"
        })
        this.swapservice.ethToBscConvert(fromVal).subscribe((result: any) => {    // ETH to BSC Convert
        // console.log("ETH TO BSC =  ", result / Math.pow(10, 18));
        this.userform.patchValue({
          to: this.decimalpipe.transform(result / Math.pow(10, 18), '1.2-2') 
        })
        this.loading=false;
        })
      }

      if (sessionStorage.getItem('account_BSC')) {
        let fromVal = BigInt(value  + '000000000000000000');
        this.currentWalletBalance = sessionStorage.getItem('bscBalance');
        if (fromVal <= this.currentWalletBalance) {
          this.insuffBalError = false;
          this.walletConnect = false;
          this.bscSwap = true;
          this.ethSwap=false;
        } else {
          this.insuffBalError = true;
          this.walletConnect = false;
          this.bscSwap = false;
          this.ethSwap=false;
        }
      } else if (sessionStorage.getItem('account_ETH')) {
        let fromVal = BigInt(value + '000000000000000000');
        this.currentWalletBalance = sessionStorage.getItem('ethBalance');
        if (fromVal <= this.currentWalletBalance) {
          this.insuffBalError = false;
          this.walletConnect = false;
          this.bscSwap = false;
          this.ethSwap=true;
        }else {
          this.insuffBalError = true;
          this.walletConnect = false;
          this.bscSwap = false;
          this.ethSwap=false;
        }
      }
      

    // }
  }


  isSelected:any;
  getFrom(value: any) {
      if (value == "BSC") {
        this.isSelected = "BSC";
      this.userform.patchValue({
        FromCrypto: "BSC"
      })
      this.userform.patchValue({
        ToCrypto: "ETH"
      })
      this.getFromValue(this.userform.controls.from.value);    
    } else {
      this.isSelected = "ETH";
      this.userform.patchValue({
        FromCrypto: "ETH"
      })
      this.userform.patchValue({
        ToCrypto: "BSC"
      })
      this.getFromValue(this.userform.controls.from.value)
    }
    // console.log("You have selected =" , this.isSelected);
    
  }

  getTo(value:any){
    if (value == "BSC") {
      this.userform.patchValue({
        FromCrypto: "ETH"
      })
      this.userform.patchValue({
        ToCrypto: "BSC"
      })
    } else {
      this.userform.patchValue({
        FromCrypto: "BSC"
      })
      this.userform.patchValue({
        ToCrypto: "ETH"
      })
    }
  }

 

  tokenAbi={};
 currentWalletBalance:any;
  async swapBSC(){
    if(this.userform.controls.from.value){
      if(sessionStorage.getItem('account_BSC') && this.isSelected == "BSC"){
        // alert("swap bsc .............");
        let fromVal = BigInt(this.userform.value.from + '000000000000000000');
          this.toster.warning('Please don\'t refresh, transaction is processing.');
          this.loading=true;
          this.tokenAbi = {};
          this.tokenAbi = appConfig.tokenAbiBSC;
          let bscContractAddress = appConfig.contractAddressBSC;
          let userAddress = sessionStorage.getItem('account_BSC');
            const data = {
              // amount : BigInt(this.userform.controls.from.value * Math.pow(10,18)),
              amount : BigInt(this.userform.controls.from.value  + '000000000000000000'),
            }

            let instance = new this.web3.eth.Contract(
              this.tokenAbi,
              bscContractAddress
            );
            const gasPrice = await this.web3.eth.getGasPrice(); 
            this.web3.eth.sendTransaction({
              from: userAddress,
              to: bscContractAddress,
              value: this.web3.utils.toHex(this.bscBridgeFee) ,
              gasPrice : gasPrice,
              data: instance.methods.swap(data.amount).encodeABI()
            }).then((res:any) => {
                // console.log("swap response  == "  , res);
                let transactionHash = res.transactionHash;  
                // console.log("your transaction hash is = " , transactionHash);
                this.swapservice.bscSwap(transactionHash).subscribe((result:any)=>{
                  // console.log("swap result = " , result);
                  this.isGetWalletBal=true;
                  this.check_get_Balance();
                  this.toster.success(result.message)
                  this.loading=false;
                  //For Clear both Input Type boxes
                  this.userform.patchValue({
                    from: 0
                  })
                  this.userform.patchValue({
                    to: 0
                  })
                })
              }).catch((err:any) => {
                this.toster.error(err.message);
                this.loading=false;
              });
      } else{
        this.toster.error("Connect to "+this.isSelected+" Network")
      }
    } else{
      this.toster.info("Enter Value")
    }
  }

  async swapETH(){
    if(this.userform.controls.from.value){
      if(sessionStorage.getItem('account_ETH') && this.isSelected == "ETH"){
        let fromVal = BigInt(this.userform.value.from + '000000000000000000');
        this.loading=true;
        this.toster.warning('Please don\'t refresh, transaction is processing.');
        this.tokenAbi = {};
        this.tokenAbi = appConfig.tokenAbiETH;
        let ethContractAddress = appConfig.contractAddressETH;
        let userAddress = sessionStorage.getItem('account_ETH');
        const data = {
          // amount: BigInt(this.userform.controls.from.value * Math.pow(10, 18)),
          amount: BigInt(this.userform.controls.from.value + '000000000000000000'),
        }
        let instance = new this.web3.eth.Contract(
          this.tokenAbi,
          ethContractAddress
        );
        const gasPrice = await this.web3.eth.getGasPrice();
        this.web3.eth.sendTransaction({
          from: userAddress,
          to: ethContractAddress,
          value: this.web3.utils.toHex(this.ethBridgeFee) ,
          gasPrice : gasPrice,
          data: instance.methods.swap(data.amount).encodeABI()
        }).then((res: any) => {
          // console.log("swap response  == ", res);
          let transactionHash = res.transactionHash;
          // console.log("your swap transaction hash is = ", transactionHash);
          this.swapservice.ethSwap(transactionHash).subscribe((result:any)=>{
            // console.log('final eth response = ',result);
            this.isGetWalletBal=true;
            this.check_get_Balance();
            this.toster.success(result.message);
            this.loading=false;
            //For Clear both Input Type boxes
            this.userform.patchValue({
              from: 0
            })
            this.userform.patchValue({
              to: 0
            })
          })
        }).catch((err: any) => {
          this.toster.error(err.message);
          this.loading=false;
        });
            
      } else{
        this.toster.error("Connect to "+this.isSelected+" Network")
      }
    } else{
      this.toster.info("Enter Value")
    }
  }




  connectMetamask() {
    // this.isDeviceMobile=true
    if(this.isDeviceMobile){
      this.walletProvider();
    }
    // else if (localStorage.getItem('walletconnect')){
    //   this.walletProvider();
    // }
    else{      
      this.metamask.initMetaMask();
    }
  }

testprovide:any;
  async walletProvider() {
    // this.headerService.connectWalletFromDashboard.next(null);
  const provider: any = new WalletConnectProvider({
      infuraId: appConfig.infuraId,
      qrcodeModalOptions: {
        mobileLinks: [
          "metamask",
          "trust",
        ],
      },
    });
    await provider.enable();
    this.testprovide=provider;
  
    this.web3 = new Web3(provider);
    const accounts = await this.web3.eth.getAccounts();
    if (accounts[0]) {
    if(provider.chainId == "97"){
      sessionStorage.setItem('account', accounts[0]);
      sessionStorage.setItem('chainId', provider.chainId)
      sessionStorage.setItem('account_ETH_trustWallet', accounts[0]);
    } else if(provider.chainId == "250"){
      sessionStorage.setItem('account', accounts[0]);
      sessionStorage.setItem('chainId', provider.chainId)
      sessionStorage.setItem('account_ETH_trustWallet', accounts[0]);
    } else if(provider.chainId){
      sessionStorage.setItem('account_ETH_trustWallet_wrongNetwork' , 'account_ETH_trustWallet_wrongNetwork')
    } else{
      sessionStorage.setItem('account_ETH_trustWallet_notConnected' , 'account_ETH_trustWallet_notConnected')
    }

      // this.connectStatus = true;
      if (!localStorage.getItem('walletConnected')) {
        localStorage.setItem('walletConnected', 'success');
        location.reload();
      }
    };
  
  
    provider.on("disconnect", (code: number, reason: string) => {
      // console.log(code, reason);
      sessionStorage.removeItem('account');
      sessionStorage.removeItem('chainId');
      sessionStorage.removeItem('account_ETH_trustWallet');
      sessionStorage.removeItem('account_ETH_trustWallet_notConnected');
      sessionStorage.removeItem('account_ETH_trustWallet_wrongNetwork')
      if (code == 1000) {
        // this.headerService.web3Instance.next(false);
        // this.metaMaskConnected = false;
        sessionStorage.removeItem('account');
        localStorage.removeItem('walletConnected');
        location.reload();
        // this.connectStatus = false;
      }
    })
  
    // this.headerService.web3Instance.next(true);
    provider.on('accountsChanged', (accounts: string[]) => {
      // this.accountAddress = accounts[0];
      sessionStorage.setItem('account', accounts[0]);
      localStorage.setItem('walletConnected', 'success');
      // this.connectStatus = true;
      location.reload();
    });

    provider.on('networkChanged', async (network: number) => {
      location.reload();
      // this.connectStatus = true;
  });
  provider.on('onConnect', async (network: number) => {
    location.reload();
    // this.connectStatus = true;
});
  }
  getMaxValue(){
    // if(window.ethereum?.networkVersion == "97" || window.ethereum?.networkVersion == "120"){
    if(window.ethereum?.networkVersion == "97" ){
      let a:any = sessionStorage.getItem('bscBalance');
      let bscBalance = a / Math.pow(10,18);
      let walletBal= bscBalance.toString().split(".")[0];
      this.userform.patchValue({
        from: walletBal
      })      
    } else if(window.ethereum?.networkVersion == "250"){
      let a:any = sessionStorage.getItem('ethBalance');
      let ethBalance = a / Math.pow(10,18);
      let walletBal= ethBalance.toString().split(".")[0];
      this.userform.patchValue({
        from: walletBal
      })  
    // }
  }
  }
}
