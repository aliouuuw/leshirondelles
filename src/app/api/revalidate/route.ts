/* eslint-disable @typescript-eslint/no-explicit-any */

import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<{ _type: string; slug?: { current: string } }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
    );

    if (!isValidSignature) {
      return new NextResponse('Invalid Signature', { status: 401 });
    }

    if (!body) {
      return new NextResponse('Bad Request', { status: 400 });
    }

    const { _type, slug } = body;

    switch (_type) {
      case 'homePage':
        revalidateTag('homePage');
        break;
      case 'aboutPage':
        revalidateTag('aboutPage');
        break;
      case 'contactPage':
        revalidateTag('contactPage');
        break;
      case 'inscriptionPage':
        revalidateTag('inscriptionPage');
        break;
      case 'siteSettings':
        revalidateTag('siteSettings');
        break;
      case 'blogPost':
        revalidateTag('blogPost'); // Revalidate all blog posts
        if (slug && slug.current) {
          revalidateTag(`blogPost:${slug.current}`); // Revalidate specific blog post
        }
        break;
      case 'program':
        revalidateTag('program'); // Revalidate all programs (e.g., for navigation)
        if (slug && slug.current) {
          revalidateTag(`program:${slug.current}`); // Revalidate specific program page
        }
        break;
      default:
        console.warn(`No revalidation tag found for type: ${_type}`);
        break;
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err: any) {
    console.error(err);
    return new NextResponse(err.message, { status: 500 });
  }
}