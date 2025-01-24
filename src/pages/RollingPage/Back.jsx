const handleLoad = async () => {
  if (offset === 0) {
    // 초기 렌더링
    let limit = 8;
    const result = await getMessage(limit, offset);
    if (!result) return;
    setMessages(result);
    setOffset(limit);
  } else {
    let limit = 9;
    const result = await getMessage(limit, offset);
    if (!result) return;
    setMessages((prevMessages) => [...prevMessages, ...result]);
    setOffset(offset + limit);
  }
};
