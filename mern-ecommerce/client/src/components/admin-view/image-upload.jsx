import { ImageIcon, XIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

function ProductImageUpload({
  imageFile,
  setImageFile,
  imageLoadingState,
  uploadedImageUrl,
  setUploadedImageUrl,
  setImageLoadingState,
  isEditMode,
  isCustomStyling = false,
}) {
  function handleUrlChange(e) {
    const url = e.target.value;
    setUploadedImageUrl(url);
    if (url) {
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
    <div className={`w-full mt-4 ${isCustomStyling ? "" : "max-w-md mx-auto"}`}>
      <Label className="text-lg font-semibold mb-2 block">Product Image URL</Label>
      <div className="border-2 border-dashed rounded-lg p-4">
        {uploadedImageUrl ? (
          <div className="space-y-3">
            <img
              src={uploadedImageUrl}
              alt="Product preview"
              className="w-full h-40 object-cover rounded-md"
              onError={(e) => { e.target.style.display = "none"; }}
            />
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground truncate max-w-[80%]">
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
          <div className="flex flex-col gap-3">
            <div className="flex flex-col items-center justify-center h-24 text-muted-foreground">
              <ImageIcon className="w-10 h-10 mb-2" />
              <span className="text-sm">Paste an image URL below</span>
            </div>
            <Input
              type="url"
              placeholder="https://images.unsplash.com/photo-..."
              disabled={isEditMode}
              onChange={handleUrlChange}
              className="text-sm"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductImageUpload;
