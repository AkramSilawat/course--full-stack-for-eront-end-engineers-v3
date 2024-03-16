// ============> Operating System <============ //

// --->> Operating System 
/*
      1. User
      2. Shell 
      3. Kernal_______
|____ 4. Hardware_____|
    */            


// ============> Security & Hashing <============ //

/*
// --->> Security 

    * Username / Password
    * Biomatric
    * ssh Key
    */


// --->> What is Hashing?
// --> Hashing algorithms are One-ways while encryption algorithms are two-ways..


// --->> openssl(OPENSSL):- openssl is a cryptography toolkit implementing the TLS(Transport Layer Security)  



// command
    
// ~ temp openssl md5 foo | awk 

// ~ temp openssl md5 foo | awk -F'{print $2}'

// ~ temp openssl md5 foo 
    // -->> MD5(foo)= 286755fad04869ca523320acce0dc6a4
    



// ============>> Hasing With Salt <============ //

// --->> command
    
// ~ temp openssl md5 foo | awk 

// ~ temp openssl md5 foo | awk -F'{print $2}' 

// ~ temp openssl sha1 foo 
    // -->> SHA1(foo)= c8fed00eb2e87f1cee8e90ebbe870c190ac3848c

// ~ temp openssl sha256 foo         // ----> 256 - 65 Character long
    // -->>SHA2-256(foo)= 6b3a55e0261b0304143f805a24924d0c1c44524821305f31d9277843b8a10f4e                 




// -->> Hashing + Salt

    /*
         INPUT + SALT + HASH FUNCTION  =  SALTED HASH

         ./FOO + SALT + SHA1           =  ??
    */ 


// -->> Hashing

/* - Bitcoun
   - SHA256
                    - Ransomware
   - Ethereum
   - Keccak-256
   */

// -->> Note : sha256 or something more complex would be better than md5    

// -->> What is Ransomware?
    // -->> Since hashing is one-way, Ransomware typically uses encryption algorithms which are two-way




// ============> Setup SSH Keys For Login <============ //

// --->> SSH

// --- SSH key pair --- 

// -- public key --
                      // ==> SSH - secure socket shell
// -- private key --

// -----------------------------------

/*
// --->> SSH

    your Computer                           Server
    _____________                           ___________
    Private Key     <<----------------      Public Key
      (secret)
                    encrypted messages  

    Password        ---------------->>      Encrypted
    */

// -----------------------------------


// -->>Exercise 
/*
    --> SSH key
       
        1. Move into the ~./ssh directory
        2. Genrate a key using ssh-keygen
        3. Nmae your key "fsfe"
        */    

// -----------------------------------

// -->Command
    
// ~ temp  cd ~/.ssh  

// ~ .ssh  ls
// -->> id_rsa  id_rsa.pub  known_hosts  known_hosts.old

// ~ .ssh  rm -rf fsfe*

// ~ .ssh  ls

// ~ .ssh  clear


// ~ .ssh  ssh-keygen          ---> ssh key genrate fsfe is name 
// -->> Generating public/private rsa key pair.
// -->> Enter file in which to save the key (/home/akram/.ssh/id_rsa):

// ~ ssh  cat fsfe.pub         ---> show public key


// -----------------------------------

 /*
// --->> SSH key

    1. Move into the ~/.ssh directory
    -> cd ~/.ssh
    2. Genrate a key using ssh-keygen
    -> ssh-keygen
    */

// ----------------------------------

/*
// --->> SSH key        -->> Press  esc  to exit full screen

    -->> .ssh ls | grep fsfe
    fsfe      <---------------   private Key 
    fsfe.pub  <---------------   Public Key

    1. Copy the public key into Digital Ocean
    2. Finish setting up the server
    */   


// ~ ssh  ls | grep fsfe
// -> fsfe
// -> fsfe.pub

// ~ ssh  cat fsfe.pub


// ------------------------------------


// -->> Exercise Login
/*
    1. ssh into your server
    --> ssh root@<your_IP>

    2. ssh into your server your private key 
    --> ssh -i ~/.ssh/fsfe root<your_IP>       

    3. Exit your sever
    --> exit
    */



// ============> SSH Key Recap <============ //

// --->> SSH Key
/*
    1. Move into the ~/ssh directory
    --> cd ~/.SSH

    2. Generate a key using ss-keygen
    --> ssh-keygen

// ---------------------------------------

 /*
    1. Make sure Keychain is active
    --> vi ~/.ssh/config

    2. Add private key to keychain
    --> ssh-add --apple-use-keychain fsfe


          Host *
            AddkeysToAgent yes
            UseKeychain  yes
        */