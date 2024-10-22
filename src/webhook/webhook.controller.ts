import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('webhook')
export class WebhookController {
  @Get()
  validateWebhook(@Query('hub.mode') mode: string, @Query('hub.challenge') challenge: string, @Query('hub.verify_token') token: string): string {
    const verifyToken = 'gessaude'; // Verifique se esse token é igual ao que você configurou no Facebook Developers
    
    if (mode && token === verifyToken) {
      return challenge;
    } else {
      return 'Invalid token';
    }
  }

  @Post()
  handleWebhook(@Body() body: any) {
    console.log('Recebido do webhook:', body);
    // Aqui você pode processar a mensagem recebida
  }
}
