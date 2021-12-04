import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppController {

    @Get('/first')
    getRoutePath() {
        return 'First Netjs API!'
    }

    @Get('/healthcheck')
    healthCheck() {
        return { message: 'Status is up' }
    }

}