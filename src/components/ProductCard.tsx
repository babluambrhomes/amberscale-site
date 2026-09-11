import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import PowerBadge from "@/components/PowerBadge";
import StatusChip from "@/components/StatusChip";

type Product = {
  slug: string;
  name: string;
  tagline: string;
  status: string;
  stat: { value: string; label: string };
  desc: string;
  img: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative block h-full overflow-hidden border border-line bg-background transition-all duration-300 hover:border-accent/40 hover:shadow-[0_20px_60px_-30px_rgba(79,70,229,0.35)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={product.img}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
        <div className="absolute left-4 top-4">
          <StatusChip status={product.status} />
        </div>
        <div className="absolute inset-x-4 bottom-4">
          <PowerBadge />
        </div>
      </div>
      <div className="flex flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold tracking-tight">{product.name}</h3>
            <p className="mt-1 text-sm text-muted">{product.tagline}</p>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-line text-foreground transition-all duration-300 group-hover:bg-accent group-hover:text-background">
            <FiArrowUpRight />
          </span>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted">{product.desc}</p>
        
      </div>
    </Link>
  );
}