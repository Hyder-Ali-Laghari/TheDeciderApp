import { useState } from "react";
import { formatTitle } from "../choices.js";

function OptionListItems({ optionList, onEdit, onRemove, disabled }) {
  const [itemTitle, setItemTitle] = useState();
  const [isEditing, setisEditing] = useState(false);
  function handleEdit(e) {
    console.log(e.target.value);
    // onEdit(item.id, e.target.value);
    // setisEditing(false);
  }

  return (
    <div className="max-h-[60vh] overflow-auto pr-2 no-scrollbar">
      {optionList.length === 0 ? (
        <p className="text-sm text-slate-300">
          No choices yet. Add an item to start the spinner.
        </p>
      ) : (
        <ol className="space-y-3">
          {optionList.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white shadow-sm"
            >
              {isEditing ? (
                <input type="text" value={itemTitle} onChange={handleEdit} />
              ) : (
                <span
                  onClick={() => setisEditing(true)}
                  className="min-w-0 break-words"
                >
                  {formatTitle(item.title)}
                </span>
              )}
              <button
                type="button"
                disabled={disabled}
                aria-label={`Remove ${item.title}`}
                onClick={() => onRemove(item.id)}
              >
                X
              </button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default OptionListItems;
