"use client";

import React from "react";
import styles from "@/components/article/article.module.css";
import { cn } from "@/lib/utils";
const page = () => {
  return (
    <div className='min-h-screen  xl:max-w-[1024px] mx-auto pt-[130px] max-xl:px-6  max-w-[768px] pb-2 '>
      <article className={styles.prose}>
        <h1 className='text-[64px] font-light mb-8 max-sm:text-[40px]'>
          Privacy Policy
        </h1>
        <span className='text-xl font-medium'>Last updated: Jan 10, 2025</span>
        <p className='pt-6'>
          At Auto Refresh Plus, we respect your privacy and are committed to
          protecting your personal information. This Privacy Policy outlines how
          we collect, use, disclose, and safeguard your information when you use
          our browser extension. Please read this Privacy Policy carefully. By
          using Auto Refresh Plus, you agree to the terms of this Privacy
          Policy.
        </p>
        <h2 className={cn("mt-[28px]", styles.heading)}>
          1. Information We Collect
        </h2>
        <h3 className={styles.subheading}>a. Information You Provide</h3>
        <ul className='list-disc pl-[44px] mb-2'>
          <li className='mt-4'>
            <strong>Contact Information:</strong> If you contact us for support
            or provide feedback, we may collect your name, email address, and
            any other information you choose to provide.
          </li>
        </ul>
        <h3 className={styles.subheading}>
          b. Automatically Collected Information
        </h3>
        <ul className='list-disc pl-[44px] mb-2'>
          <li className='mt-4'>
            <strong>Usage Data:</strong> We collect information about your
            interactions with the extension, such as the frequency and duration
            of use, using Google Analytics.
          </li>
          <li className='mt-4'>
            <strong>Technical Data:</strong> Google Analytics may collect
            information about your device, browser type, operating system, and
            IP address. This data is anonymized and aggregated to help us
            understand how the extension is used.
          </li>
        </ul>
        <h3 className={styles.subheading}>
          b. Automatically Collected Information
        </h3>
        <ul className='list-disc pl-[44px] mb-2'>
          <li className='mt-4'>
            When submitting a contact form on Auto Refresh Plus website, you
            agree to share with us your name, email, your concern message,
            country, operating system, browser name and version.
          </li>
          <li className='mt-4'>
            If the Auto Refresh Plus extension is installed, we also collect the
            extension version, install date, and extension configuration for
            easier debugging and error resolution.
          </li>
          <li className='mt-4'>
            Please note that all data is anonymized, and we do not know your
            identity.
          </li>
        </ul>
        <h2 className={cn("!mt-[28px]", styles.heading)}>
          2. How We Use Your Information
        </h2>
        <p className='!mb-4'>
          We use the information we collect for the following purposes:
        </p>
        <ul className='list-disc pl-[44px] mb-2'>
          <li className='mt-4'>
            <strong>To Provide and Maintain the Extension:</strong> Ensuring the
            extension functions correctly and efficiently.
          </li>
          <li className='mt-4'>
            <strong>To Improve Our Services:</strong> Analyzing usage data to
            enhance user experience and add new features.
          </li>
          <li className='mt-4'>
            <strong>To Communicate with You:</strong> Responding to your
            inquiries, providing support, and sending updates or information
            about the extension.
          </li>
          <li className='mt-4'>
            <strong>To Ensure Security:</strong> Monitoring for fraudulent or
            malicious activity and ensuring the security of our services.
          </li>
        </ul>
        <h2 className={cn("!mt-[28px]", styles.heading)}>
          3. How We Share Your Information
        </h2>
        <p className='!mb-4'>
          We do not sell, trade, or otherwise transfer your personal information
          to outside parties except as described below:
        </p>
        <ul className='list-disc pl-[44px] mb-2'>
          <li className='mt-4'>
            <strong>Service Providers:</strong> We may share your information
            with third-party service providers who assist us in operating the
            extension, conducting our business, or serving our users, so long as
            those parties agree to keep this information confidential.
          </li>
          <li className='mt-4'>
            <strong>Legal Requirements:</strong> We may disclose your
            information if required to do so by law or in response to valid
            requests by public authorities.
          </li>
        </ul>
        <h2 className={cn("!mt-[28px]", styles.heading)}>4. Data Security</h2>
        <p className='!mb-4'>
          We implement a variety of security measures to maintain the safety of
          your personal information when you use the extension. However, please
          be aware that no security measures are perfect or impenetrable, and we
          cannot guarantee the absolute security of your information.
        </p>
        <h2 className={cn("!mt-[28px]", styles.heading)}>5. Your Rights</h2>
        <p className='!mb-4'>
          Depending on your location, you may have the following rights
          regarding your personal information:
        </p>
        <ul className='list-disc pl-[44px] mb-2'>
          <li className='mt-4'>
            <strong>Access:</strong> You have the right to request access to the
            personal information we hold about you.
          </li>
          <li className='mt-4'>
            <strong> Correction:</strong> You have the right to request
            correction of any inaccurate or incomplete personal information.
          </li>
          <li className='mt-4'>
            <strong>Deletion:</strong> You have the right to request deletion of
            your personal information, subject to certain legal obligations.
            Objection: You have the right to object to the processing of your
            personal information.
          </li>
          <li className='mt-4'>
            <strong>Objection:</strong> You have the right to object to the
            processing of your personal information.
          </li>
        </ul>
        <h2 className={cn("!mt-[28px]", styles.heading)}>
          6. Use of Google Analytics
        </h2>
        <p className='!mb-4'>
          Auto Refresh Plus uses Google Analytics to collect information about
          your use of the extension. Google Analytics collects information such
          as how often users visit the extension, what pages they visit, and
          what other sites they used prior to coming to the extension. We use
          the information we get from Google Analytics to improve our extension
          and services. <br /> <br /> Google Analytics collects only the IP
          address assigned to you on the date you use the extension, rather than
          your name or other identifying information. We do not combine the
          information collected through the use of Google Analytics with
          personally identifiable information. Although Google Analytics plants
          a persistent cookie on your web browser to identify you as a unique
          user the next time you use the extension, the cookie cannot be used by
          anyone but Google. Google’s ability to use and share information
          collected by Google Analytics about your visits to the extension is
          restricted by the Google Analytics Terms of Use and the Google Privacy
          Policy.
        </p>

        <h2 className={cn("!mt-[28px]", styles.heading)}>
          7. Changes to This Privacy Policy
        </h2>
        <p className='!mb-4'>
          We may update this Privacy Policy from time to time to reflect changes
          to our practices or for other operational, legal, or regulatory
          reasons. We will notify you of any significant changes by posting the
          new Privacy Policy on our website or through the extension. Your
          continued use of the extension after such changes will constitute your
          acknowledgment of the modified Privacy Policy and your agreement to
          abide by it.
        </p>
        <h2 className={cn("!mt-[28px]", styles.heading)}>8. Contact Us</h2>
        <p className='!mb-5'>
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <p className='!mb-5'>Email: support@autorefresh.io</p>
        <p className='!mb-5'>
          By using Auto Refresh Plus, you signify your acceptance of this
          Privacy Policy. If you do not agree to this policy, please do not use
          our extension. Your continued use of the extension following the
          posting of changes to this policy will be deemed your acceptance of
          those changes.
        </p>
      </article>
    </div>
  );
};

export default page;
