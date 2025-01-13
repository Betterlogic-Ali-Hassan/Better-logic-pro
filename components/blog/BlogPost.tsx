import React from "react";
import style from "@/components/article/article.module.css";
import { cn } from "@/lib/utils";
import Image from "next/image";
const BlogPost = () => {
  return (
    <div className='max-w-[842px] mx-auto w-full'>
      <div className='blog'>
        <p className='my-8'>
          IT administrators often need to manage extensions to protect and
          enable their employees who use Chrome. I’ve written about the
          different methods of managing third-party extensions, but sometimes
          enterprises want to create their own custom extensions, so they can
          meet the exact needs of their users. Once the extension is created,
          the question becomes: How do you deploy it to your users? Most
          administrators use the Extension ​Install​ Forcelist policy, either
          via Chrome Browser Cloud Management or Microsoft Group Policy Object
          (GPO), to remotely install extensions to their users. But to use these
          methods, the extension needs to be present in the Chrome Web Store. In
          this post, I’ll provide some guidance on how to get this done. Note
          that you’ll need to request a developer account (if you don’t have one
          already) and pay a small, one-time fee to publish extensions.
        </p>
        <h2 className={cn("!my-8", style.heading)}>Get your extension ready</h2>
        <p>
          Once you’ve created your extension (if you need to, check out this
          tutorial on writing extensions), it’s time to package it up to add it
          to the Chrome Web Store. To do so, you’ll need at least the following:
        </p>
        <ul className='list-disc pl-[44px] mb-2'>
          <li className='mt-4'>
            A manifest file saved as manifest.json (This is a JSON file that
            describes what the extension does).
          </li>
          <li className='mt-4'>
            A 128-pixel by 128-pixel logo, saved as 128.png. (Depending on your
            extension, you might have other files, but this is the minimum
            needed to add an extension to the Chrome Web Store. You might also
            need a screenshot if you publish it as unlisted or public.)
          </li>
        </ul>
        <h2 className={cn("!my-8", style.heading)}>Test your extension</h2>
        <p>You can test your extension by:</p>
        <ul className='list-decimal pl-[44px] mb-2'>
          <li className='mt-4'>
            A manifest file saved as manifest.json (This is a JSON file that
            describes what the extension does).
          </li>
          <li className='mt-4'>
            A 128-pixel by 128-pixel logo, saved as 128.png. (Depending on your
            extension, you might have other files, but this is the minimum
            needed to add an extension to the Chrome Web Store. You might also
            need a screenshot if you publish it as unlisted or public.)
          </li>
          <li className='mt-4'>
            A 128-pixel by 128-pixel logo, saved as 128.png. (Depending on your
            extension, you might have other files, but this is the minimum
            needed to add an extension to the Chrome Web Store. You might also
            need a screenshot if you publish it as unlisted or public.)
          </li>
        </ul>
        <h2 className={cn("!my-8", style.heading)}>
          Create a collection of extensions (optional)
        </h2>
        <p>
          You might want to recommend a group of extensions to users in your
          organization. You can do this by creating a collection that users can
          browse and install. Check out this link for more information.
        </p>
        <h2 className={cn("!my-8", style.heading)}>Test your extension</h2>
        <p>
          There are three ways you can publish an extension to the Chrome Web
          Store:
        </p>
        <ul className='list-decimal pl-[44px] mb-2'>
          <li className='mt-4'>
            <strong className='font-medium'>Private:</strong> Only users in your
            domain can see the extension and install it. To make private
            extensions available to users outside of your domain, you would need
            to set up a “trusted tester” group and add them manually via email
            addresses within the Chrome Developer Dashboard.
          </li>
          <p>
            Here’s what your users will see via the Chrome Web Store, notifying
            them that this is a restricted extension only users on your domain:
          </p>
          <div className='w-full'>
            <Image
              src='https://storage.googleapis.com/gweb-cloudblog-publish/images/chrome_extension_1.max-1200x1200.jpg'
              alt='img'
              height={264}
              width={1000}
              className='rounded-[16px]  object-cover border border-[#2021241a]  my-8 '
            />
          </div>

          <li className='mt-4'>
            A 128-pixel by 128-pixel logo, saved as 128.png. (Depending on your
            extension, you might have other files, but this is the minimum
            needed to add an extension to the Chrome Web Store. You might also
            need a screenshot if you publish it as unlisted or public.)
          </li>
          <li className='mt-4'>
            A 128-pixel by 128-pixel logo, saved as 128.png. (Depending on your
            extension, you might have other files, but this is the minimum
            needed to add an extension to the Chrome Web Store. You might also
            need a screenshot if you publish it as unlisted or public.)
          </li>
        </ul>
        <h2 className={cn("!my-8", style.heading)}>Deploy your extension </h2>
        <p>
          Private extensions will require users to be signed in with their
          Google Identity to verify the domain. Unlisted or public extensions
          can be added to Chrome Browser Cloud Management under the “Apps and
          extensions” section; click on the yellow “+” button and select “Add
          Chrome app or extension by ID.” Here’s a demo adding an unlisted
          extension:
        </p>

        <Image
          src='/img.gif'
          alt='img'
          height={264}
          width={1000}
          className='rounded-[16px]  object-cover border border-[#2021241a]  my-8'
        />
      </div>
    </div>
  );
};

export default BlogPost;
