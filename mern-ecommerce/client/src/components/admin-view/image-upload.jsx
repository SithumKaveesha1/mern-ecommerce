import { ImageIcon, XIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

function ProductImageUpload({
  imageFile,
  setImageFile,
  uploadedImageUrl,
  setUploadedImageUrl,
  isEditMode,
}) {
  function handleUrlChange(e) {
    const url = e.target.value;
    setUploadedImageUrl(url);
    if (url && url.trim() !== "") {
      setImageFile({ name: url });
    } else {
      setImageFile(null);
    }
  }

  function handleRemoveImage() {
    setImageFile(null);
    setUploadedImageUrl("");
  }

  return (
    <div className="w-full mt-4">
      <Label className="text-lg font-semibold mb-2 block">Product Image URL</Label>
      <div className="border-2 border-dashed rounded-lg p-4 space-y-3">
        <Input
          type="text"
          placeholder="https://images.unsplash.com/photo-..."
          disabled={isEditMode}
          value={uploadedImageUrl || ""}
          onChange={handleUrlChange}
          className="text-sm"
        />
        {uploadedImageUrl && uploadedImageUrl.trim() !== "" ? (
          <div className="space-y-2">
            <img
              src={uploadedImageUrl}
              alt="Product preview"
              className="w-full h-40 object-cover rounded-md border"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground truncate max-w-[80%]">
                {uploadedImageUrl}
              </p>
              {!isEditMode && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={handleRemoveImage}
                >
                  <XIcon className="w-4 h-4" />
                  <span className="sr-only">Remove Image</span>
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-16 text-muted-foreground">
            <ImageIcon className="w-8 h-8 mb-1" />
            <span className="text-xs">Paste image URL above to preview</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductImageUpload;
