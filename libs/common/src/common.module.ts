import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { ConfigService } from './config/config.service';

@Module({
  providers: [CommonService, ConfigService],
  exports: [CommonService],
})
export class CommonModule {}
