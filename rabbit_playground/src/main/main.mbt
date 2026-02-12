///|
using @tea {none}

///|
using @tea {type Cmd}

///|
using @html {type Html, div, h1, p, text, input}

///|
struct Model {
  value : String
  is_focused : Bool
  last_event : String
}

///|
enum Msg {
  Init
  InputChanged(String)
  Focused
  Blurred
}

///|
fn[M] bind_focus_blur_listener(
  id : String,
  focused_msg : M,
  blurred_msg : M,
) -> Cmd[M] {
  Cmd(events => {
    install_focus_blur(id, fn() { events.trigger_update(focused_msg) }, fn() {
      events.trigger_update(blurred_msg)
    })
  })
}

///|
extern "js" fn install_focus_blur(
  id : String,
  on_focus : () -> Unit,
  on_blur : () -> Unit,
) =
  #|(id, onFocus, onBlur) => {
  #|  const el = document.getElementById(id);
  #|  if (!el) return;
  #|  el.addEventListener('focus', onFocus);
  #|  el.addEventListener('blur', onBlur);
  #|}

///|
fn update(msg : Msg, model : Model) -> (Cmd[Msg], Model) {
  match msg {
    Init =>
      (
        bind_focus_blur_listener("tracked-input", Msg::Focused, Msg::Blurred),
        model,
      )
    InputChanged(value) => (none(), { ..model, value, last_event: "input" })
    Focused => (none(), { ..model, is_focused: true, last_event: "focus" })
    Blurred => (none(), { ..model, is_focused: false, last_event: "blur" })
  }
}

///|
fn view(model : Model) -> Html[Msg] {
  div(
    class="mx-auto mt-16 max-w-xl space-y-4 rounded-lg border border-slate-300 bg-white p-6",
    [
      h1(class="text-2xl font-bold text-slate-900", [
        text("Rabbit-TEA focus/blur sample"),
      ]),
      p(class="text-slate-600", [
        text("Type in the input and switch focus to see events."),
      ]),
      input(
        id="tracked-input",
        class="w-full rounded border border-slate-300 px-3 py-2",
        placeholder="Focus and blur this input",
        value=model.value,
        input=v => Msg::InputChanged(v),
      ),
      p(class="text-slate-800", [
        text(
          "focused: \{model.is_focused.to_string()}, last_event: \{model.last_event}, value: \{model.value}",
        ),
      ]),
    ],
  )
}

///|
fn main {
  let model = { value: "", is_focused: false, last_event: "none" }
  let app = @tea.new(model~, update~, view~)
  app.dispatch(Msg::Init)
}
