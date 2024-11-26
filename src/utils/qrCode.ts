import QRCode from 'qrcode';

export const generateQRCode = async (text: string): Promise<string> => {
  try {
    return await QRCode.toDataURL(text, {
      width: 300,
      margin: 2,
      color: {
        dark: '#2A3E55', // patriot-navy
        light: '#FFFFFF',
      },
    });
  } catch (err) {
    console.error('Error generating QR code:', err);
    throw err;
  }
};