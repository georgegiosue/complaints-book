import { ProductsResponseDTO } from "@/dto/products-response.dto";
import ComplaintsForm from "@/components/complaints-form";
import { parseStringToBoolean } from "@/lib/utils";

const PRODUCTS_ENDPOINT = process.env.PRODUCTS_ENDPOINT!;

export default async function Home() {
  const response = await fetch(PRODUCTS_ENDPOINT);

  const data: ProductsResponseDTO = await response.json();

  const products = data.products;

  const companyName: string = process.env.COMPANY_NAME!;
  const formTitle: string = process.env.FORM_TITLE!;
  const formSubtitle: string = process.env.FORM_SUBTITLE!;

  const currency = {
    symbol: process.env.CURRENCY_SYMBOL!,
    name: process.env.CURRENCY_NAME!,
  };
  const responseTime = Number.parseInt(process.env.MAX_RESPONSE_TIME!);
  const recaptcha = {
    enabled: parseStringToBoolean(process.env.RECAPTCHA_ENABLED!),
    siteKey: process.env.RECAPTCHA_WEB_KEY!,
  };

  return (
    <section className="p-4">
      <ComplaintsForm
        companyName={companyName}
        formTitle={formTitle}
        formSubtitle={formSubtitle}
        products={products}
        currency={currency}
        responseTime={responseTime}
        recaptcha={recaptcha}
      />
    </section>
  );
}
