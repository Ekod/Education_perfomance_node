/*
    Hey, man! Here are a couple of tips on how to increase the perfomance of your server
*/
process.env.UV_THREADPOOL_SIZE = 1; //You can go up to 2 but remember that a single CPU core can process 2 threads at a time max (btw, in case of using 2 threads the processing time also doubles)
const cluster = require("cluster"); //That's a native module
const os = require("os"); // That one as well
if (cluster.isMaster) { //Ok, so the first time you start up the server using this code, node process will go through a Cluster Manager which will create a worker instance(just read up on it), then cluster.fork() will create a clone of your server by starting index.js once again
  
  const cpus = os.cpus().length; //That will give the ammount of CPU's you have

  for (let i = 0; i < cpus; i++) { //that's the piece of code that creates a clone of your server. In order for you not bother with figuring out how many cpu cores you have and adjusting the ammount of clones to fit the number of cores I have written a small for loop that will create the nesessary number of clones
    cluster.fork(); 
  } 
} else {
  /*
        Here, in the "else" statement, you just right your usual backend code, like:

        const express = require ('express')
        const app = express()

        ...and so on

    */
}

/* 
    There are other ways to optimize the perfomance, but they are slightly more complicated, so use this piece of code and if it's not enough just PM me and I'll help! Bless you!
*/

