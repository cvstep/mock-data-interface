module.exports = {
  options: {
    separator: '\n',
  },
  paths: {
    src: ['./spec/paths/**/*.yaml'],
    dest: '.tmp/paths.yaml',
  },
  definitions: {
    src: ['./spec/definitions/**/*.yaml'],
    dest: '.tmp/definitions.yaml',
  },
  info: {
    src: ['./spec/info/**/*.yaml'],
    dest: '.tmp/info.yaml',
  },
  parameters: {
    src: ['./spec/parameters/**/*.yaml'],
    dest: '.tmp/parameters.yaml',
  },
  responses: {
    src: ['./spec/responses/**/*.yaml'],
    dest: '.tmp/responses.yaml',
  },
  index: {
    src: ['./spec/index.yaml'],
    dest: '.tmp/index.yaml',
  },
};
