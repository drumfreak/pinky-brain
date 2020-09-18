const CronJob = require('cron').CronJob;
const { exec } = require("child_process");
console.log('Scheduling Pinking and The Brain Cronjob');
const job = new CronJob('15 * * * *', function() {
	const d = new Date();
  console.log('Running Pinking and the Brain Iteration:', d);
  let command = '/usr/bin/curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:3069/api/bot/talk';
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
});
// console.log('After job instantiation');
job.start();
