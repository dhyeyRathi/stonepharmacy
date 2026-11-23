

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stonepharmacy.vercel.app';

export async function GET() {


  const content = `# Paydens Pharmacy

> Paydens is an independent pharmacy group across South East England providing NHS prescriptions, clinical advice, and pharmacy services.

## Main Pages
- [Home](${baseUrl}/)
- [NHS Prescriptions](${baseUrl}/prescriptions)
- [Find Pharmacy](${baseUrl}/findpharmacy)
- [Health Conditions](${baseUrl}/allconditions-health)
- [All Conditions](${baseUrl}/all-conditions)
- [About Us](${baseUrl}/about)
- [Careers](${baseUrl}/joinourteam)

`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
