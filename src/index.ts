import { server } from './server/Server';
import 'dotenv/config';
import { insertUfs } from './server/shared/utils';

server.listen(process.env.PORT || 3333,
  () => console.log(`Esta rodando na porta ${process.env.PORT || 3333}`));



console.log(insertUfs)

