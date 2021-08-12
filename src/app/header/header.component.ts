import { Component, OnInit , DoCheck} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MetamaskService } from '../services/metamask.service';
import { DeviceDetectorService } from 'ngx-device-detector';
// import { NgxSpinnerService } from "ngx-spinner";
import { SwapService } from '../swap/swap.service';
declare let window: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , DoCheck{
 
  isDeviceMobile=false;
  currentWalletbalance:any;
  constructor(private metamask:MetamaskService,
              private deviceService: DeviceDetectorService,
              private toster:ToastrService,
              // private spinner: NgxSpinnerService,
              private swapservice :SwapService) {
      const isMobile = this.deviceService.isMobile();
      const isTablet = this.deviceService.isTablet();
      if (isMobile) {
        this.isDeviceMobile = true;
      }
  
      if (isTablet) {
        this.isDeviceMobile = true;
      }
     }

  bscChain=false;   
  ethChain=false;

  connectWallet=true;
  walletconnected:any;
  walletaddress:any;
  wrongNetwrk:any;
  ropstenChain:any;
  ngOnInit(): void {
    if(window.location.pathname == "/swap"){
      sessionStorage.setItem('swapPage' , "swapv1v2")
    }


    this.test();
  }

  test(){
    if(sessionStorage.getItem('swapPage') == "swap"){
      // console.log("Normal Swap ...");
      if(!this.isDeviceMobile){
      if(window.ethereum?.networkVersion == "97" && sessionStorage.getItem('account_BSC')){
        this.connectWallet = false;
        this.walletconnected = true;
        this.wrongNetwrk= false;
        let add:any = sessionStorage.getItem('account_BSC');
        let start = add.substring(0, 6);
        let end = add.slice(-4);
        this.walletaddress = start+"...."+end;
      } else if (window.ethereum?.networkVersion == "250" && sessionStorage.getItem('account_ETH')){
        this.connectWallet = false;
        this.walletconnected = true;
        this.wrongNetwrk= false;
        let add:any = sessionStorage.getItem('account_ETH');
        let start = add.substring(0, 6);
        let end = add.slice(-4);
        this.walletaddress = start+"...."+end;
      } 
      else if(!window?.ethereum?.selectedAddress){
        this.connectWallet = true;
        this.walletconnected = false;
        this.wrongNetwrk= false;
        this.ethChain=false;
        this.bscChain=false
      }
      else{
        this.connectWallet = false;
        this.walletconnected = false;
        this.wrongNetwrk= true;
        this.ethChain=false;
        this.bscChain=false
      }
    } else{
      if(sessionStorage.getItem('chainId') == "97"){
        this.connectWallet = false;
        this.walletconnected = true;
        this.wrongNetwrk= false;
        this.bscChain=true;
        this.ropstenChain = false;
        this.ethChain=false;
        let add:any = sessionStorage.getItem('account_ETH_trustWallet');
        let start = add.substring(0, 6);
        let end = add.slice(-4);
        this.walletaddress = start+"...."+end;
      } else if(sessionStorage.getItem('chainId') == "250"){
        this.connectWallet = false;
        this.walletconnected = true;
        this.wrongNetwrk= false;
        this.bscChain=false;
        this.ropstenChain = true;
        this.ethChain=false;
        let add:any = sessionStorage.getItem('account_ETH_trustWallet');
        let start = add.substring(0, 6);
        let end = add.slice(-4);
        this.walletaddress = start+"...."+end;
      }else if(sessionStorage.getItem('account_ETH_trustWallet_wrongNetwork')){
        this.connectWallet = false;
        this.walletconnected = false;
        this.wrongNetwrk= true;
        this.ethChain=false;
        this.ropstenChain=false;
        this.bscChain=false
      }
      else{
        this.connectWallet = true;
        this.walletconnected = false;
        this.wrongNetwrk= false;
        this.ropstenChain=false;
        this.ethChain=false;
        this.bscChain=false
      }
    }
      
      if(this.isDeviceMobile == false){
        if(sessionStorage.getItem('account_BSC') && window.ethereum?.networkVersion == "97" ){
          this.bscChain = true;
        } else{
          this.bscChain = false;
        }
       
        if(sessionStorage.getItem('account_ETH') && window.ethereum?.networkVersion == "250"){
          this.ropstenChain = true;
        } else{
          this.ropstenChain = false;
        }
      }


  
      //For Balance
      
      if(sessionStorage.getItem('bscBalance')){
        let a:any = sessionStorage.getItem('bscBalance');
        this.currentWalletbalance = a / Math.pow(10,18);
      } else if(sessionStorage.getItem('ethBalance')){
        let a:any = sessionStorage.getItem('ethBalance');
        this.currentWalletbalance = a / Math.pow(10,18);
      }
      
    } else if (sessionStorage.getItem('swapPage') == "swapv1v2"){
      // console.log("swapv1v2"); 
      // console.log(window.ethereum?.networkVersion)
      if(!this.isDeviceMobile){
      if(window.ethereum?.networkVersion == "1" && sessionStorage.getItem('account_ropsten')){
        this.connectWallet = false;
        this.walletconnected = true;
        this.wrongNetwrk= false;
        this.ethChain = true;
        let add:any = sessionStorage.getItem('account_ropsten');
        let start = add.substring(0, 6);
        let end = add.slice(-4);
        this.walletaddress = start+"...."+end;
      }else if(!window?.ethereum?.selectedAddress){
        this.connectWallet = true;
        this.walletconnected = false;
        this.wrongNetwrk= false;
        this.ethChain=false;
        this.bscChain=false
      }
      else{
        this.connectWallet = false;
        this.walletconnected = false;
        this.wrongNetwrk= true;
        this.ethChain=false;
        this.bscChain=false
      }
    }else{
      if(sessionStorage.getItem('account_ETH_trustWallet')){
        this.connectWallet = false;
        this.walletconnected = true;
        this.wrongNetwrk= false;
        this.ethChain = true;
        let add:any = sessionStorage.getItem('account_ETH_trustWallet');
        let start = add.substring(0, 6);
        let end = add.slice(-4);
        this.walletaddress = start+"...."+end;
      }else{
        this.connectWallet = true;
        this.walletconnected = false;
        this.wrongNetwrk= false;
        this.ethChain=false;
        this.bscChain=false
      }
    }
  
      //For Balance
      
      if(sessionStorage.getItem('account_ropsten')){
        let a:any = sessionStorage.getItem('v1v2Balance');
        this.currentWalletbalance = a / Math.pow(10,18);
      } 
      if(sessionStorage.getItem('account_ETH_trustWallet')){
        let a:any = sessionStorage.getItem('ETH_trustWallet_balance');
        this.currentWalletbalance = a / Math.pow(10,18);
      } 
    }
    
  }

  ngDoCheck(){
    this.test();
    console.log("header docheck")
  }


  

  
address:any;

  connectMetamask() {
    if(this.isDeviceMobile){
       this.metamask.walletProvider();
      // this.metamask.connectWalletHandler();
    }
    // else if (localStorage.getItem('walletconnect')){
    //   this.metamask.walletProvider();
    // }
    else{
      this.metamask.initMetaMask();
    }
  }


  

}
