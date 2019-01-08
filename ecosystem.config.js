module.exports = {
  apps: [{
    name: 'austin-comments',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-191-172-82.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/jumpstartFrontEnd.pem',
      ref: 'origin/master',
      repo: 'https://github.com/BetterJump/Austin-Comments.git',
      path: '/home/ubuntu/Austin-Comments',
      'post-deploy': 'npm run start && pm2 startOrRestart ecosystem.config.js'
    }
  }
}