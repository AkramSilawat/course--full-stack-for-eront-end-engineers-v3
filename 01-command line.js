// ==========> Command Line Exercise <========== //

// -->> Diving in

// --> * Terminal and Command line
// --> * Vim
// --> * Shells


// -->> Terminal and Command line

// --> fast
// --> consistent
// --> low overhead



// -->> Exercise         --- iTerm2
/*
    -->> Terminal and Command line

    * ls - list directory contents
    * cd - change directory 
    * mkdir - Make directory 
    * rmdir - Remove directory 
         
    * cat - Show file contents
    * man - command manual
    * less - Show file content by page
    * touch - creates an Empty File
    * rm - remove file
    * echo - repeat input
    */



/*
    -->> Terminal and Command line

    1. Navigate to your home directory
    2. Make a new directory called "temp"
    3. Move into temp
    4. List the directory contents
    5. Make a file called "hello"
    6. List the directory contents
    7. Move out of temp
    8. Delete temp
    */






// ==========> Command Line Solution <========== //

// --> ~  cd ~        ---> navigate to home directory

// --> ~  pwd         ---> print working directory
// --->> /home/akram

// --> ~  cd /home/akram

// --> ~  cd ~

// --> ~  mkdir temp

// --> ~  ls


// --> ~  cd ~ temp

// --> temp  ls

// --> temp  toush hello
// --->> temp: command not found

// --> temp  ls

// --> temp  man ls   -->> User commands     new treminal

// --> temp  ls -la
/* --->> total 8
--> drwxrwxr-x  2 akram akram 4096 Mar 13 12:46 .
--> drwxr-x--- 26 akram akram 4096 Mar 13 12:59 ..
*/

// --> temp  cd ..      ---> back one level up

// --> cd ../../../../../     ---> but we actually can only move so far.

// -->   / ls
// --->> bash: /: Is a directory

// -->  rmdir temp
// -->>  rmdir: failed to remove 'temp' No such file or directory

// -->  rm temp
// -->> rm: cannot remove 'temp': No such file or directory

// -->  man rm      
// --->> General Commands Manual

// -->  man 

// -->  man rm      
// --->> -R




// ============> VIM Exercise <============ //


// ===>> In case you get lost

/*
    1. cd.. - Move up one directory
    2. pwd - print working directory
    3. clear - clear terminal output
    4. ctrl + c - Exit program
    5. cd ~ - navigate to home directory
*/
 

// ===>> VIM 

/*
    insert mode     -    Text Editing

    normal mode     -    Primary mode

    command mode    -    Searching, Saving, Exiting

*/ 


/*                                  
// ===>> VIM        --->> [Save and Exit :wq]

    insert mode     -    i

    normal mode     -    ESC

    command mode    -    :

*/ 



/*
// ===>> VIM                               

    1.Navigate to your home directory
    2.Make a directory called "temp"
    3.Open a file named "test" with vi
    4.Write a few lines
    5.Save and Exit
*/

// --->> ESC  :q!
