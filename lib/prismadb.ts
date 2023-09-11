import {PrismaClient} from '@prisma/client'
import exp from 'constants';

// adding prisma to global
declare global{
    var prisma:PrismaClient | undefined;
}

const prismadb=globalThis.prisma || new PrismaClient();
if(process.env.NODE_ENV!== "production") globalThis.prisma=prismadb;


export default prismadb;