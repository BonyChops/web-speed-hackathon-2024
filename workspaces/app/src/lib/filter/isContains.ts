type Params = {
  query: string;
  target: string;
};

function normalizeString(s: string): string {
  // 全角英数字を半角に変換
  // ひらがなをカタカナに変換（またはその逆）
  // その他、必要に応じて正規化を追加
  return s.normalize("NFKC").replace(/[\u3041-\u3096]/g, match =>
    String.fromCharCode(match.charCodeAt(0) + 0x60)
  );
}

export function isContains({ query, target }: Params): boolean {
  const normalizedQuery = normalizeString(query);
  const normalizedTarget = normalizeString(target);
  return normalizedTarget.includes(normalizedQuery);
}