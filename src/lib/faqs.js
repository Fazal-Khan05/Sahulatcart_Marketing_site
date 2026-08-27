/**
 * FAQ content. Lives here rather than in the section component so the same
 * questions can feed both the accordion UI and the FAQPage structured data,
 * which Google uses for rich results. Keep the two in sync by construction —
 * never hand-write schema that says something the page doesn't.
 */
export const faqs = [
  {
    question: "What is Sahulatcart?",
    answer: "Sahulatcart is an AI-powered commerce platform that turns customer conversations on WhatsApp into automated sales. Our AI handles inquiries, negotiates prices, recommends products, and closes orders — all without human intervention."
  },
  {
    question: "Does it support Urdu and Roman Urdu?",
    answer: "Yes! Our AI natively understands Roman Urdu, formal Urdu, English, and even local slang and dialects. It grasps context and intent, not just keywords."
  },
  {
    question: "How does the AI negotiation work?",
    answer: "You set the rules — minimum margins, maximum discounts, pricing tiers. The AI negotiates within those boundaries, offering polite counter-offers and strategic discounts to close sales without eroding your profits."
  },
  {
    question: "Can I integrate with Shopify?",
    answer: "Absolutely. We offer real-time two-way sync with Shopify — products, inventory, orders, and pricing all stay in sync automatically."
  },
  {
    question: "What about COD orders?",
    answer: "We have built-in COD verification. The AI confirms addresses, validates phone numbers, and can even require advance payment for high-risk orders."
  },
  {
    question: "Is there a free plan?",
    answer: "Yes! Our Starter plan is completely free with up to 5 conversations per day. No credit card required."
  },
  {
    question: "How long does setup take?",
    answer: "Most merchants are up and running in under 10 minutes. Connect your WhatsApp, upload your products, set your rules, and the AI starts selling."
  }
];
