async function convertToJson(res) {
    const jsonResponse = await res.json(); // Convert response to JSON before checking status
    if (res.ok) {
        return jsonResponse;
    } else {
        throw { name: 'servicesError', message: jsonResponse }; // Send detailed error message
    }
}
