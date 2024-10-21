import ComplaintsForm from "@/components/complaints-form";
import { ProductsResponseDTO } from "@/dto/products-response.dto";
import { parseStringToBoolean } from "@/lib/utils";
import { notFound } from "next/navigation";

const PRODUCTS_ENDPOINT = process.env.NEXT_PUBLIC_PRODUCTS_ENDPOINT!;

export const dynamic = "force-dynamic";

export default async function Home() {
  const response = await fetch(PRODUCTS_ENDPOINT);

  const data: ProductsResponseDTO = await response.json();

  if (!data) {
    return notFound();
  }

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
