import Wrapper from "@/app/components/Wrapper";
import { Link } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy and Policy",
};
const page = () => {
  return (
    <main className="my-12">
      <Wrapper>
        <main>
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <p className="mb-4 text-gray-700">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your information when you use our website
            or services.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              1. Information We Collect
            </h2>
            <p className="text-gray-700">
              We may collect personal information such as your name, email
              address, and any other information you provide when using our
              services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700">
              We use your information to provide and improve our services,
              communicate with you, and comply with legal obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">3. Data Protection</h2>
            <p className="text-gray-700">
              We take appropriate security measures to protect your personal
              information from unauthorized access, disclosure, alteration, or
              destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">4. Cookies</h2>
            <p className="text-gray-700">
              We use cookies to enhance your experience on our website. You can
              choose to disable cookies through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              5. Third-Party Services
            </h2>
            <p className="text-gray-700">
              We may use third-party services to help operate our site and
              services. These providers have their own privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
            <p className="text-gray-700">
              You have the right to access, update, or delete your personal
              information at any time. Please contact us if you wish to exercise
              these rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              7. Changes to This Policy
            </h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We encourage
              you to review it periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:{" "}
              <Link
                href="mailto:support@example.com"
                className="text-primary-400 hover:underline"
              >
                vorn@example.com
              </Link>
            </p>
          </section>
        </main>
      </Wrapper>
    </main>
  );
};

export default page;
