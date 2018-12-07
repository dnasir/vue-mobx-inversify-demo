/**
 * Try/catch decorator
 * @param target Target class
 * @param key Method name
 * @param descriptor 
 */
function TryCatch(target, key, descriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args) {
    try {
      return await originalMethod.apply(this, args);
    } catch (error) {
      console.error(error.message);
    }
  };

  return descriptor;
}

export default TryCatch;