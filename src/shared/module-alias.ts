import * as path from 'path';
import moduleAlias from 'module-alias';

const files = path.resolve(__dirname, '../..');

moduleAlias.addAliases({
  '@src': path.join(files, 'src'),
  '@adapters': path.join(files, 'src', 'adapters'),
  '@test': path.join(files, 'test')
});
