export default function PrivacyPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="lead">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard
          your information.
        </p>

        <h2>Information We Collect</h2>
        <p>We collect information you provide directly to us when you:</p>
        <ul>
          <li>Create an account</li>
          <li>Use our services</li>
          <li>Save bookmarks</li>
          <li>Interact with our AI assistant</li>
          <li>Contact customer support</li>
        </ul>

        <p>This information may include:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Password</li>
          <li>Bookmark data (URLs, titles, descriptions, tags)</li>
          <li>Chat history with our AI assistant</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions</li>
          <li>Send you technical notices and support messages</li>
          <li>Respond to your comments and questions</li>
          <li>Develop new products and services</li>
          <li>Monitor and analyze trends and usage</li>
          <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
        </ul>

        <h2>Data Storage and Security</h2>
        <p>
          We use Supabase to store your data securely. Your bookmarks are protected by Row Level Security, ensuring that
          only you can access your data. We implement appropriate technical and organizational measures to protect your
          personal information.
        </p>

        <h2>Data Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This
          does not include trusted third parties who assist us in operating our website, conducting our business, or
          servicing you, so long as those parties agree to keep this information confidential.
        </p>

        <h2>Your Rights</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
        <ul>
          <li>The right to access your personal information</li>
          <li>The right to correct inaccurate information</li>
          <li>The right to delete your information</li>
          <li>The right to data portability</li>
          <li>The right to object to processing</li>
        </ul>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
        </p>

        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at privacy@markbookmarks.com.</p>

        <p className="text-sm mt-8">Last Updated: March 21, 2024</p>
      </div>
    </div>
  )
}

