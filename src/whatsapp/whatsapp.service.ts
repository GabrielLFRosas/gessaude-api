import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WhatsappService {

  private readonly apiUrl = 'https://graph.facebook.com/v20.0/449506918239939/messages';
  private readonly token = 'EAAH6aRe9qjUBOZBew37OfdyADFZA1XdgtsEgl11pBBTAllab2FyKcPFgG2qqBcB1d24QC3B9IPfwdBKbaEESkz5ZCBFYk8RpGdYDRa1n7CQsE6PZCtG1Qi8lExhlO0VTrV5xUMxXpxljIsbHa90itIhGTcRzpuhGc7spaeZARyKybCRfVh8nNNLSTabx9tqoGnR0Wbcr77PEQRBYNZAKZCfjL38iQZBy';
  async sendMessage(to: string, message: string): Promise<any> {
    const payload = {
      messaging_product: 'whatsapp',
      to,
      type: "text",
      text: {body: message}
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    };

    try {
      const response = await axios.post(this.apiUrl, payload, { headers });
      return response.data;
    } catch (error) {
      console.error('Error sending WhatsApp message', error.response?.data || error.message);
      throw new Error('Failed to send WhatsApp message');
    }
  }
}
