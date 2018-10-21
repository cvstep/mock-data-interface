module.exports = {
  options: {
    execOptions: {
      stdio: 'inherit'
    }
  },
  watch: {
    command: 'grunt watch',
    options: {
      async: true,
    }
  },
  build: {
    command: 'md .tmp | node ./node_modules/json-refs/bin/json-refs resolve -I relative -y .tmp/index.yaml > .tmp/build.yaml'
  },
  swaggerize: {
    command: 'yo swaggerize:handler --framework express --apiPath ".tmp/build.yaml"'
  },
  cover: {
    command: 'node ./node_modules/istanbul/lib/cli.js cover ./node_modules/tape/bin/tape "tests/**/*.js"'
  }
};
