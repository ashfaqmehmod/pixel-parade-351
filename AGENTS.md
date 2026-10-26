<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Contact form leads go through `src/lib/leads.functions.ts` (createServerFn) which appends a row to the user's Google Sheets spreadsheet "Bill Arena Leads" via the connector gateway; the FormSubmit email copy is fire-and-forget and must never block the form's success state. Why: the email endpoint is slow/unreliable, the sheet save is the source of truth.
