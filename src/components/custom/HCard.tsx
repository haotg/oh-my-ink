import Amount from "@/components/custom/Amount";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { JSX } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Close } from "@radix-ui/react-dialog";

interface HCardProps {
  src: string;
  title: string;
  amount: number;
  width: number;
  height: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function HCard({
  src,
  title,
  amount,
  as,
  width,
  height,
}: HCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card>
          <Image
            className="w-full h-full object-cover"
            src={src}
            alt={title}
            width={width}
            height={height}
          />
          <CardContent>
            <CardTitle className="mb-2">{title}</CardTitle>
            <Amount amount={amount} as={as} />
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <Image src={src} alt={title} width={width} height={height} />
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam,
        </DialogDescription>
        <Close>
          <DialogFooter>
            <Button asChild>
              <div className="uppercase w-full"> Try it on</div>
            </Button>
          </DialogFooter>
        </Close>
      </DialogContent>
    </Dialog>
  );
}
