import { products } from '../data/products.js';

function getCatalogContext() {
  return products.map((p) => ({
    id: p.id,
    name: p.name,
    brand: p.brand,
    category: p.category,
    price: p.price,
    previousPrice: p.previousPrice,
    rating: p.rating,
    reviewCount: p.reviewCount,
    shortDescription: p.shortDescription,
    features: p.features,
    specifications: p.specifications,
    availability: p.availability
  }));
}

export function isApiKeyConfigured() {
  const key = import.meta.env.VITE_GEMINI_API_KEY;
  return Boolean(key && key !== 'your_api_key_here' && key.trim().length > 5);
}

async function callGeminiApi(systemPrompt, userPrompt) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey || apiKey === 'your_api_key_here' || apiKey.trim().length < 5) {
    throw new Error('MISSING_API_KEY');
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`;

  const payload = {
    contents: [
      {
        role: 'user',
        parts: [
          { text: `${systemPrompt}\n\nUser Request: ${userPrompt}` }
        ]
      }
    ],
    generationConfig: {
      temperature: 0.3,
      topP: 0.95
    }
  };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const message = errorData?.error?.message || `API error (${response.status})`;
    throw new Error(message);
  }

  const data = await response.json();
  const candidate = data?.candidates?.[0];
  const text = candidate?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error('Received an empty response from Gemini.');
  }

  return text;
}

function generateDemoAssistantResponse(query) {
  const q = query.toLowerCase();
  let matched = [];

  if (q.includes('phone') || q.includes('smartphone') || q.includes('s25') || q.includes('pixel') || q.includes('iphone') || q.includes('oneplus')) {
    matched = products.filter((p) => p.category === 'Smartphones');
  } else if (q.includes('laptop') || q.includes('program') || q.includes('college') || q.includes('macbook') || q.includes('dell') || q.includes('zenbook')) {
    matched = products.filter((p) => p.category === 'Laptops');
  } else if (q.includes('headphone') || q.includes('audio') || q.includes('study') || q.includes('sony') || q.includes('bose') || q.includes('airpods')) {
    matched = products.filter((p) => p.category === 'Headphones');
  } else if (q.includes('watch') || q.includes('fitness') || q.includes('garmin')) {
    matched = products.filter((p) => p.category === 'Smartwatches');
  } else {
    matched = products.slice(0, 3);
  }

  const primary = matched[0];
  const secondary = matched[1] || matched[0];

  return `### Recommendations based on ShopSmart catalog

Here are realistic options directly available in the ShopSmart dataset matching your inquiry:

#### 1. ${primary.name} (${primary.brand}) — $${primary.price}
* **Why it matches:** ${primary.shortDescription}
* **Key Specifications:** ${Object.entries(primary.specifications).slice(0, 3).map(([k, v]) => `${k.toUpperCase()}: ${v}`).join(' | ')}
* **Key Strengths:** ${primary.features.slice(0, 2).join('; ')}.
* **Important Trade-offs:** Carries a higher price point of $${primary.price}. ${primary.category === 'Smartphones' ? 'Slightly heavier chassis compared to compact alternatives.' : 'Prioritizes sustained power over featherweight bulk.'}

${secondary.id !== primary.id ? `#### 2. ${secondary.name} (${secondary.brand}) — $${secondary.price}
* **Why it matches:** ${secondary.shortDescription}
* **Key Specifications:** ${Object.entries(secondary.specifications).slice(0, 3).map(([k, v]) => `${k.toUpperCase()}: ${v}`).join(' | ')}
* **Important Trade-offs:** $${secondary.price} gives a different balance of operating system, battery endurance, and port selection.
` : ''}

### Considerations Before Buying
* Consider whether operating system compatibility (iOS vs Android vs Windows vs macOS) fits into your current workflow.
* If a requested specification is not listed above, that parameter is currently unverified in our local dataset.
* Neither product is an absolute best choice; choose according to whether maximum battery life or raw software ecosystem synergy matters more for your daily tasks.`;
}

function generateDemoComparison(productList, contextNotes) {
  return `### Neutral Comparative Analysis: ${productList.map((p) => p.name).join(' vs ')}

${contextNotes ? `**Context Analyzed:** ${contextNotes}\n` : ''}

#### Summary
Both selected items serve demanding user requirements within the ${productList[0].category} tier, but they emphasize distinctly different priorities in hardware configuration and price-to-performance ratio.

#### Key Differences & Specifications
${productList.map((p) => `* **${p.name} ($${p.price})**: Rating ${p.rating}/5.0 (${p.reviewCount} reviews). Top spec: ${Object.entries(p.specifications).slice(0, 2).map(([k, v]) => `${k}: ${v}`).join(', ')}.`).join('\n')}

#### Advantages of Each
${productList.map((p) => `* **${p.name}**: Offers ${p.features[0] || 'solid hardware design'} and ${p.features[1] || 'great battery endurance'}.`).join('\n')}

#### Trade-offs
${productList.map((p) => `* **${p.name}**: Priced at $${p.price}${p.previousPrice ? ` (discounted from $${p.previousPrice})` : ''}. May not suit buyers who require a different ecosystem or form factor.`).join('\n')}

#### Which User Each Product May Suit
${productList.map((p, idx) => `* **${p.name}**: Suited for ${idx === 0 ? 'users prioritizing established brand ecosystem and long-term support' : 'users seeking maximum feature value and hardware endurance per dollar spent'}.`).join('\n')}

*Note: ShopSmart does not declare a single winner. We encourage you to evaluate your specific budget and workflow constraints.*`;
}

function generateDemoBudgetPlan({ category, budget, intendedUse, priorities }) {
  const numBudget = Number(budget) || 1000;
  const filtered = products.filter((p) => {
    const catMatch = category === 'all' || p.category.toLowerCase() === category.toLowerCase();
    return catMatch;
  });

  const withinBudget = filtered.filter((p) => p.price <= numBudget);
  const selected = withinBudget.length > 0 ? withinBudget : filtered;
  const topPick = selected[0] || products[0];

  return `### Budget Assessment: ${category} for ${intendedUse || 'General Use'}

* **Allocated Budget:** $${numBudget}
* **Stated Priorities:** ${priorities || 'Balanced performance and value'}

#### Primary Option: ${topPick.name}
* **Price:** $${topPick.price} (${topPick.price <= numBudget ? `Leaves $${numBudget - topPick.price} remaining in your budget` : `Exceeds budget by $${topPick.price - numBudget}`})
* **Match Rationale:** Addresses your intended use of "${intendedUse || 'general tasks'}" through ${topPick.features[0] || 'balanced processing power'}.
* **Key Specifications:** ${Object.entries(topPick.specifications).slice(0, 3).map(([k, v]) => `${k}: ${v}`).join(' | ')}
* **Trade-off Analysis:** While delivering strong daily reliability, you compromise on certain specialized workstation features found in more expensive models.

#### Alternative Considerations
If your budget allows flexibility, consider if higher-end configurations with expanded storage or lighter chassis justify the increment, or if saving the surplus funds for accessories provides greater overall utility.`;
}

export async function askShoppingAssistant(userQuery) {
  const catalog = getCatalogContext();
  const systemPrompt = `You are the intelligent shopping advisor for "ShopSmart".
You must strictly follow these rules:
1. ONLY recommend and discuss products that exist in the provided ShopSmart product catalog: ${JSON.stringify(catalog)}.
2. Under no circumstances invent products, features, or specifications that are not in the catalog.
3. If a requested specification or feature is not available in the dataset, clearly state that the information is unavailable.
4. NEVER use absolute terms like "definitely the best", "guaranteed best choice", or "unbeatable winner". Always provide neutral, objective trade-off analysis.
5. Format your response with clear markdown headings, bullet points, price details, and a "Considerations Before Buying" section.`;

  try {
    return await callGeminiApi(systemPrompt, userQuery);
  } catch (error) {
    if (error.message === 'MISSING_API_KEY' || error.message.includes('API_KEY_INVALID') || error.message.includes('403') || error.message.includes('400')) {
      const fallback = generateDemoAssistantResponse(userQuery);
      return {
        text: fallback,
        isDemoFallback: true,
        originalError: error.message
      };
    }
    throw error;
  }
}

export async function compareProductsWithAI(productList, contextNotes = '') {
  const systemPrompt = `You are an expert product analyst for "ShopSmart".
Analyze the following selected products from the ShopSmart catalog: ${JSON.stringify(productList)}.
Context or user focus: ${contextNotes || 'General comparison'}.

Rules:
1. Provide a neutral analysis containing:
   - Summary
   - Key differences
   - Advantages of each
   - Trade-offs
   - Which type of user each product may suit
2. DO NOT declare an overall winner. Use neutral, balanced explanations.
3. Only use specs present in the provided product objects. If data is missing, note that it is unrecorded.`;

  const userPrompt = `Compare these products: ${productList.map((p) => p.name).join(', ')}. Context notes: ${contextNotes}`;

  try {
    return await callGeminiApi(systemPrompt, userPrompt);
  } catch (error) {
    if (error.message === 'MISSING_API_KEY' || error.message.includes('API_KEY_INVALID') || error.message.includes('403') || error.message.includes('400')) {
      const fallback = generateDemoComparison(productList, contextNotes);
      return {
        text: fallback,
        isDemoFallback: true,
        originalError: error.message
      };
    }
    throw error;
  }
}

export async function getBudgetRecommendations(params) {
  const { category, budget, intendedUse, priorities } = params;
  const catalog = getCatalogContext();

  const systemPrompt = `You are a budget-focused shopping assistant for "ShopSmart".
Examine the available catalog: ${JSON.stringify(catalog)}.
User constraints:
- Category: ${category}
- Budget: $${budget}
- Intended Use: ${intendedUse}
- Key Priorities: ${priorities}

Rules:
1. Recommend suitable options from the catalog within or reasonably close to the budget.
2. Outline trade-offs for each option.
3. Never invent specs. If a spec is not in the data, state it is unavailable.
4. Do not proclaim an absolute winner. Give the buyer the context to choose.`;

  const userPrompt = `Please evaluate options for category "${category}", budget $${budget}, intended for "${intendedUse}" with priorities "${priorities}".`;

  try {
    return await callGeminiApi(systemPrompt, userPrompt);
  } catch (error) {
    if (error.message === 'MISSING_API_KEY' || error.message.includes('API_KEY_INVALID') || error.message.includes('403') || error.message.includes('400')) {
      const fallback = generateDemoBudgetPlan(params);
      return {
        text: fallback,
        isDemoFallback: true,
        originalError: error.message
      };
    }
    throw error;
  }
}
