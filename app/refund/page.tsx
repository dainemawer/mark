export default function RefundPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="lead">
          We want you to be completely satisfied with your purchase. Please read our refund policy below.
        </p>

        <h2>Subscription Refunds</h2>
        <p>
          If you are not satisfied with your subscription to Mark Bookmark Manager, you may request a refund within 14
          days of your initial purchase. To be eligible for a refund, you must submit your request in writing to our
          support team explaining the reason for your dissatisfaction.
        </p>

        <h2>Refund Process</h2>
        <p>
          Once we receive your refund request, we will review it and notify you of the approval or rejection of your
          refund. If approved, your refund will be processed, and a credit will automatically be applied to your
          original method of payment within 5-10 business days.
        </p>

        <h2>Partial Refunds</h2>
        <p>
          Partial refunds may be granted on a case-by-case basis. If you have used a significant portion of your
          subscription period, we may prorate your refund based on the unused time remaining in your subscription.
        </p>

        <h2>Annual Subscriptions</h2>
        <p>
          For annual subscriptions, refunds requested after the initial 14-day period may be provided as a prorated
          amount for the unused portion of your subscription, less any applicable fees.
        </p>

        <h2>Non-Refundable Items</h2>
        <p>The following are not eligible for refunds:</p>
        <ul>
          <li>Subscription fees after the 14-day refund period has expired</li>
          <li>Any transaction fees or taxes associated with your purchase</li>
          <li>Subscriptions that have been canceled and reactivated</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about our refund policy, please contact our support team at
          support@markbookmarks.com.
        </p>
      </div>
    </div>
  )
}

