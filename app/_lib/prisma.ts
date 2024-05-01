/* eslint-disable no-unused-vars */

// Este código cria e exporta uma instância do cliente Prisma, armazenando globalmente em ambientes de desenvolvimento para evitar múltiplas instâncias, e criando uma nova instância em ambientes de produção.

import { PrismaClient } from "@prisma/client";

declare global {
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;
