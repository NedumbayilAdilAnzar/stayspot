import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStay } from "../../../lib/stays";

export default async function StayPage({
  params,
}: {
  params: Promise<{id:string}>
}) {
  const {id} = await params;
  const stay = await getStay(id);
  if(!stay) notFound();
  return (
    <article className="detail">
      <Link href="/" className="back">
          Back to stays
      </Link>
      <Image
        src={stay.image}
        alt={stay.name}
        width={1200}
        height={800}
        priority
        className="detail-image"
      />
      <h1>{stay.emoji}{stay.name}</h1>
      <p className="muted">{stay.location}</p>
      <p className="price">${stay.pricePerNight}
        <span>/ night</span>
      </p>
      <p>{stay.blurb}</p>
    </article>
  )

}
