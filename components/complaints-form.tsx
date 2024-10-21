"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { ProductDTO } from "@/dto/product.dto";
import { xor } from "@/lib/utils";
import { useState } from "react";
import { Captcha } from "./captcha";
import { IssueDate } from "./issue-date";
import { UploadSignature } from "./upload-signature";
import { id } from "date-fns/locale";
import { Checkbox } from "./ui/checkbox";

type ComplaintsFormProps = {
  className?: string;
  companyName: string;
  formTitle: string;
  formSubtitle: string;
  products: ProductDTO[];
  currency: {
    symbol: string;
    name: string;
  };
  responseTime: number;
  recaptcha: {
    enabled: boolean;
    siteKey: string;
  };
};

const ComplaintsForm: React.FC<ComplaintsFormProps> = ({
  className,
  companyName,
  formTitle,
  formSubtitle,
  products,
  currency,
  responseTime,
  recaptcha,
}) => {
  const [captchaValid, setCaptchaValid] = useState(false);
  const [isMinor, setIsMinor] = useState(false)
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if (!captchaValid) {
    //   alert("Por favor, complete el captcha");
    //   return;
    // }
    // Here you would handle form submission, PDF generation, and email sending using Resend
    console.log("Form submitted");
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>
          {formTitle} - {companyName}
        </CardTitle>
        <CardDescription>
          {formSubtitle}
          {/* [Nº 000000001-202X] */}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Nombre Completo</Label>
              <Input id="fullName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Domicilio</Label>
              <Input id="address" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="id">DNI / CE</Label>
              <Input id="id" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" type="tel" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="isMinor" checked={isMinor} onCheckedChange={(checked) => setIsMinor(checked === true)} />
                <Label htmlFor="isMinor">Es menor de edad</Label>
              </div>
            </div>
            {isMinor && (
              <div className="space-y-2">
                <Label htmlFor="guardian">Padre o Madre</Label>
                <Input id="guardian" required={isMinor} />
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label>Producto o Servicio</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Seleccione producto o servicio" />
              </SelectTrigger>
              <SelectContent>
                {products.map((product: any) => (
                  <SelectItem key={product.id} value={product.id}>
                    {product.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Monto Reclamado ({currency.name})</Label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                {currency.symbol}
              </span>
              <Input
                id="amount"
                type="number"
                min="0"
                step="0.01"
                className="pl-8"
              />
            </div>
          </div>

          <div className="space-y-2">
            <IssueDate />
          </div>

          <div className="space-y-2">
            <Label>Tipo</Label>
            <RadioGroup defaultValue="reclamo">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="reclamo" id="reclamo" />
                <Label htmlFor="reclamo">
                  Reclamo (Disconformidad con productos o servicios)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="queja" id="queja" />
                <Label htmlFor="queja">
                  Queja (Disconformidad con la atención al cliente)
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="details">Detalle</Label>
            <Textarea id="details" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="request">Pedido del Consumidor</Label>
            <Textarea id="request" required />
          </div>

          <div className="space-y-2">
            <UploadSignature />
          </div>

          <div className="text-sm text-gray-500">
            <p>
              Nota: La formulación del reclamo no impide acudir a otras vías de
              solución de controversias ni es requisito previo para interponer
              una denuncia ante el INDECOPI. {companyName} debe dar respuesta en
              un plazo no mayor a {responseTime} días hábiles.
            </p>
          </div>

          <Captcha recaptcha={recaptcha} setCaptchaValid={setCaptchaValid} />
        </form>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          className="w-full"
          disabled={xor(!captchaValid, !recaptcha.enabled)}
        >
          Enviar Reclamo
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ComplaintsForm;
