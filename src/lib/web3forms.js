/**
 * Web3Forms submission helper.
 *
 * The access key is a publishable key — it identifies the destination inbox
 * and is safe to ship in the client bundle.
 */
const ACCESS_KEY = '36dc09ed-8b31-44e3-ae72-39ca50010617';

/**
 * Posts a form payload to Web3Forms.
 *
 * @param {Object} fields - Form fields to send (subject, from_name, and any custom fields)
 * @returns {Promise<boolean>} Whether the submission succeeded
 */
export async function submitToWeb3Forms(fields) {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ access_key: ACCESS_KEY, ...fields }),
  });

  const result = await response.json();
  return result.success === true;
}
