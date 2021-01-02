import { ModuleMetadata, Type } from '@nestjs/common/interfaces';

export interface TelegramModuleOptions {
  botKey: string;
  /**
   * Change API url for self-hosted telegram bot api server.
   * @see https://core.telegram.org/bots/api#using-a-local-bot-api-server
   * @example https://domain.tld
   */
  apiUrl?: string;
}

export interface TelegramOptionsFactory {
  createTelegramOptions():
    | Promise<TelegramModuleOptions>
    | TelegramModuleOptions;
}

export interface TelegramModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<TelegramOptionsFactory>;
  useClass?: Type<TelegramOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<TelegramModuleOptions> | TelegramModuleOptions;
  inject?: any[];
}
