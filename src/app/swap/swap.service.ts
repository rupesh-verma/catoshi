import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { env } from 'process';
@Injectable({
  providedIn: 'root'
})
export class SwapService {
  private bscBalance = environment.apiurl + 'balanceOfBSC?userAddress=';
  private bscToeth = environment.apiurl + 'getAmountAfterFeeForBSC?amount=';
  private ethBalance = environment.apiurl + 'balanceOf?userAddress=';
  private ethtobsc = environment.apiurl + 'getAmountAfterFeeForETH?amount=';

  private swapBsc = environment.apiurl + 'getTransactionResponse?txHash=';
  private swapeth = environment.apiurl + 'getTransactionResponseETH?txHash=';
  
  private ETHbridgeFee = environment.apiurl + 'getETHBridgeFees';
  private BSCbridgeFee = environment.apiurl + 'getBSCBridgeFees';

  constructor(private http:HttpClient) {
    
   }

   getBSCBalanace(bscWalletAddress:any){
     return this.http.get(this.bscBalance+bscWalletAddress);
   }

   bscToEthConvert(data:any){
     return this.http.get(this.bscToeth+data)
   }

   getETHBalanace(ethWalletAddress:any){
    return this.http.get(this.ethBalance+ethWalletAddress);
  }

  ethToBscConvert(data:any){
    return this.http.get(this.ethtobsc+data)
  }

  bscSwap(data:any){
    return this.http.get(this.swapBsc+data)
  }

  ethSwap(data:any){
    return this.http.get(this.swapeth+data)
  }


  getETHbridgeFee(){
    return this.http.get(this.ETHbridgeFee);
  }

  getBSCbridgeFee(){
    return this.http.get(this.BSCbridgeFee)
  }

}
