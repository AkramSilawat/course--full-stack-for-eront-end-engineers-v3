// ============> How the internet Works <============ //
/*
// -> Understanding the internet

    * How the internet works
    * Buying a domain
    * putting it together
*/

// -------------------------------------------

// ==>> How does the internet work?

//            magic?
// Fornt  ---------------->>

//           Extra magic?
//        <<----------------  Backand

// ---------------------------------------------

// ==>> The internet is built on cooperation and rules

    /*
        computer
             |
            \|/
        network card                          Server
             |                                  /|\
            \|/                                  |          
           router                           Load balancer
             |                                  /|\
            \|/                                  | 
            ISP                              Server cluster
             |                                   /|\
            \|/                                  |  
        Tier 1 ISP  --->  Tier 1 ISP  ----->  Datacenter
    */

// -------------------------------------------------

// -->> Terminology
    /*
        Internet -  A Network of Networks

        Intranet -  Private Network

        LAN -  Local Area Network

        WAN -  Wide area Network

        */

     /*
        IP - Internet Protocl

        IP Address - numerical label assigned to  an internet connected device.

        IPv34                  IPv6
        0.0.0.0                2001:db8::ff00:4288   
        */   

// -------------------------------------------------

// -->> Terminology
    /* 
        IP -  internet protocol

        IP Address -  numeric label assigned to an internet connected device

    IPv4                   IPv6
    8.8.8.8          2001:4860:4560:8888   
        */


    

// ============> Network Tools Exercise <============ //

/*
        1. Check status of a network host
           ping google.com
            
        2. Follow the path of your request
           traceroute google.com

        3. Show network status
           netstat -lt | less                
        */

// -------------------------------------------------

// --->> Command 

// -> .ssh  traceroute goolge.com

// -> .ssh  man traceout 

// -> .ssh  man traceroute



// ============> Internet & Networking Terminology <============ //

//-->> Terminology
/*
    TCP - transmission contrl protocol
            
    UDP - User datagram protocol

    ICMP - internet control message protocol

    Packet  - unit of data transmitted over a network
    */

// -----------------------------------------------------

// ~~~~ TCP vs UDP Communication :- ~~~ //

/*
        ~~ TCP HANDSHAKE :- much slower. ~~

              SYN ----------->  

    Sender    <--------SYN ACK      Reciver
            
              ACK ----------->            
                           
*/

// --------------------------------------------------------


// UDP :- Is a one way. usefull for streaming video. it is faster

/*
                     UDP

              <------- REQUEST

              RESPONSE ------>
              
    Sender    RESPONSE ------>    Reciver

              RESPONSE ------>       
*/





// ============> DNS & URLs <============ //

// -->> How the internet works 

/*
    
    Computer -----> TCP/IP -----> frontendmasters.com ----->  server ??
    127.0.0.1
*/

// ------------------------------------------------------


// -->> Teeminology

//  DNS  ~  domain name system

//  Nameserver  ~  hold DNS records to translate domain 
//                 names into IP address


// -------------------------------------------------------


// -->> DNS records 

//  A record  ~  maps name to IP address

//  CNAME  ~  maps name to name



// -->> Exercise DNS 
/*
   -->  Lookup the nameservers for an domain
      - nslookup frontendmasters.com

   -->  Lookup the DNS records for a domain
      - dig frontendmasters.com


   -->  View browser DNS cache
      - Chrome ~ chrome://net-internals/#dns

      - Firefox ~ about:networking#dns
*/

// --------------------------------------------------------

// -->> Antonomy of a URL

/*
    
    --->>> URL - uniform resource locator

       --> blog.yourdomain.com/en/fulllstack?test=true                                
        
        ~ blog.yourdomain.com  ->  subdomain

        ~ yourdomain.com  ->  domain

        ~ .com  ->  tld

        ~ /en/fullstack?  ->  Path

        ~ test=true  ->  query paramete 
        */




// ============> Buying a Domain Name <============ //
/*
    1. Buy a domain with a register 
       a. Update the nameserver to use Digital Ocean
    2. On Digital Ocean, add two A record with your IP Address

    * @
    * www

    */ 

// -->> Command 

// -> .ssh dig jemstack.lol



// -->>> Server Setup 

/*
    Topics : 

    * Server setup
    * Web Servers
    * NodeJS
*/