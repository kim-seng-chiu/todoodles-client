import { Storage } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";

export async function s3Upload(file) {
  const uuid = uuidv4();
  const filename = `${Date.now()}-${file.name}`;

  const stored = await Storage.vault.put(uuid, filename, file, {
    contentType: file.type,
  });

  return stored.key;
}
