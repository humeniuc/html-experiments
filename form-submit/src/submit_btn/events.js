
function _initButtons()
{
    _add_form_buttons_submitter = function(form) {
        Array.from(form.elements).filter((item) => item.matches('button[type="submit"],input[type="submit"]')).forEach((btn) => {

            btn.addEventListener('click', function () {
                if (! btn.form) {
                    return;
                }

                console.log('click on ', btn);
                console.log('click poate fi "click" sau "enter" în formular');

                const form = btn.form;
                const _submitterKey = Math.random();
                form._submitter = btn;
                form._submitterKey = _submitterKey;

                console.log('set form._submitter', form._submitter);
                console.log('set form._submitterKey', form._submitterKey);

                setTimeout(() => {
                    if (form._submitter === btn && form._submitterKey === _submitterKey) {
                        console.log('delete form._submitter', form._submitter);
                        console.log('delete form._submitterKey', form._submitterKey);

                        delete form._submitter;
                        delete form._submitterKey;
                    } else {
                        console.log("_submitterKeyChanged");
                    }
                }, 200);
            });

        });
        
    };

    document.body.querySelectorAll('form').forEach((form) => _add_form_buttons_submitter(form));
}

document.addEventListener('DOMContentLoaded', _initButtons);
